const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const joi = require('joi');
const validator = require('../../validations/userValidations');


//to get every User
router.get('/', (req, res) => {
    User.find().then(user=>res.send(user))
});

//login
router.post('/login', function(req, res){
  const email= req.body.email;
  const password= req.body.password;
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password,salt)
 
  User.findOne({email: email, password: password}, function(err, user){
      if(err){
          console.log(err);
          return res.status(500).send();
      }
      if(!user){
          return res.status(404).send();

      }
      req.session.user= user;
      return res.status(200).send();
  })
});

//dashboard
router.get('/dashboard', function(req,res){
  if(!req.session.user){
    return res.status(401).send();

  }
  return res.status(200).send("Welcome!");
})

//register new user
router.post('/register', async (req,res) => {
  // const isValidated = validator.registerValidation(req.body);
	// 	if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
    const {type, email, username, date_of_birth, name, password, phone, is_private, interests, info, field_of_work,board_members,reports,years_of_experience,skills }  = req.body
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
            events_created:[]
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
    
    
    
    
