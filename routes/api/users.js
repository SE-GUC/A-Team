const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const Event = require('../../models/Event');
const joi = require('joi');
const moment = require('moment')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey




// {
	
//   "type":["P"],
//     "username":"mohamedhooda",
//     "name":"Mohamed Mahmoud",
//     "email": "mohamedhooda@lirten.com",
//     "password": "hashedPassword" ,
//     "date_of_birth":"balooza",
//     "phone": "01005599171",
//     "is_private": false,
//     "interests":["Computer Science"],
//     "field_of_work": [],
//     "board_members":[]
// }
//to get every User
    // router.get('/', passport.authenticate('jwt', {session: false}),  async (req, res) => {
    //   const users = await User.find()
    //   res.json({ data: users })
    // });

const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];
    
  if(typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];
    
      req.token = token;
      next();
  } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
  }
}

router.get('/', (req, res) => {
    User.find().then(user=>res.send(user))
});

// router.get('/getEvents/:id', async(req,res)=>{
//   const user = await User.findById(req.params.id).exec()
//   const events = await user.events_attended
//   return res.json({ data: events })
// })

router.get('/getEvents', checkToken, async (req, res) => {
  //verify the JWT token generated for the user
  jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
      if(err){
          //If error send Forbidden (403)
          console.log('ERROR: Could not connect to the protected route');
          res.sendStatus(403);
      } else {
          const user = await User.findById(authorizedData.id).exec()
          const events = await user.events_attended

          console.log('SUCCESS: Connected to protected route');

          //If token is successfully verified, we can send the autorized data 
          return res.json({
              data:events
          });
      }
  })
});

//Amr Story 1.15
router.get('/get_tasks/:id',async(req,res) => {
  const users = await User.findById(req.params.id).exec()
  const tasksApplied = await users.tasks_applied_for
  return res.json({data: tasksApplied})
})
//Amr Story 1.1
//STILL NOT TESTED
router.put('/remove_application/:id', async (req,res) => {
  
  const m = await User.update( {_id: req.params.id}, { $pull: {tasks_applied_for: req.body.tasks_applied_for}}
    )
    return res.json({data:m})
})


router.get('/getCreatedEvents', checkToken, async (req, res) => {
  //verify the JWT token generated for the user
  jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
      if(err){
          //If error send Forbidden (403)
          console.log('ERROR: Could not connect to the protected route');
          res.sendStatus(403);
      } else {
          const user = await User.findById(authorizedData.id).exec()
          const events = await user.events_created

          console.log('SUCCESS: Connected to protected route');

          //If token is successfully verified, we can send the autorized data 
          return res.json({
              data:events
          });
      }
  })
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, user.password);
		if (match) {
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email, 
                type:user.type
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});

//dashboard
router.get('/dashboard',checkToken, function(req,res){
  
  jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
    if(err){
        //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
        return res.json({
            data:authorizedData
        });
    }
})
})


//register new user
router.post('/register', async (req,res) => {
    const {type, email, username, date_of_birth, name, password, phone, is_private, interests, info, field_of_work,board_members,reports,years_of_experience,skills }  = req.body
    /*const status = joi.validate(req.body, {
      name: joi.string().min(2).max(40).required(),  Handled in frontend
      email: joi.string().email().required(), Handled in frontend
      password: joi.string().required(), Handled in front end with more restrictions
      type: joi.array().items(joi.string().min(1).max(2)).required(), Handled in front end
      username: joi.string().min(8).max(50).required(), Handled in frontend
      date_of_birth: joi.string().required(), //Handled in frontend
      phone: joi.string().required(), handled in front end
      is_private: joi.boolean().required(), handled in frontend
      interests: joi.array().items(joi.string()).required(), handled in frontend
      info:joi.allow(),
      field_of_work:joi.allow(),
      board_members: joi.allow(),
      reports:joi.allow(),
      years_of_experience:joi.allow(),
      skills:joi.allow(),
      notifications:joi.allow()
      })*/
     

      
    const useremail = await User.findOne({email})
    const usernamef = await User.findOne({username})
    if(useremail||usernamef){
      if(useremail)
       return res.status(400).json({error: 'Email already exists'})
       else 
       return res.status(400).json({error: 'username already exists'})

      }


    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)

    const newUser = new User({
            type,
            username,
            name,
            email,
            password: hashedPassword ,
            date_of_birth,
            phone,
            eventsAttended: [],
            is_private,
            interests,
            info, 
            field_of_work,
            board_members,
            reports,
            years_of_experience,
            skills,
            notifications:[],
            past_projects:[],
            events_created:[],
            tasks_applied_for:[]
        })
    newUser
    .save()
    .then(user => res.json({data: user}))
    .catch(err => res.json({error: err.message}))
}) 

router
  .route('/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .get(async (request, response) => {
    try {
      const user = await User.findById(request.params.id).exec()
      return response.json({ data: user })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a user given the following id` })
    }
  })
  .put(async (request, response) => {
    User.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a user given the following data` })
      }
    })
  })
  .delete((request, response) => {
    User.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a user given the following data` })
      }
    })
  })


  router
  .route('/:id/addEvent')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        eventid:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const user = await User.findByIdAndUpdate(request.params.id, { $push: { eventsAttended: request.body.eventid } }).exec()
      return response.json({ data: user })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })


//Delete user
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete({_id:req.params.id}).then(user => res.send(user))
});
//get specific user
router.get('/users/:id',async (req,res) => {
    const id = req.params.id
    const user = await users.findOne({id})
    if(!user) return res.status(404).send({error: 'User does not exist'})
    else
    res.json({data: user})
    });





module.exports=router
    
    
    
    
