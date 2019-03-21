const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const User = require('../../models/User')



// const users=[
//     {
//         id:1,
//         first_name:"Youssef",
//         middle_name:"Zaki",
//         last_name:"Shalaby",
//         dob:"23/09/1998",
//         email:"youshalaby@gmail.com",
//         password:"allezleblues",
//         phone: '01119455455' ,
//         country:"Egypt",
//         city:"cairo",
//         account_open_on:""
    
    
    
//     },
//     {
//         id:2,
//         first_name:"Mesut",
//         middle_name:"AMin",
//         last_name:"Ozil",
//         dob:"23/09/1990",
//         email:"ozil@gmail.com",
//         password:"iamjd",
//         phone: '02222345455' ,
//         country:"England",
//         city:"London",
//         account_open_on:""
    
//     },
//     {
//         id:3,
//         first_name:"Emily",
//         middle_name:"Olivia",
//         last_name:"Blunt",
//         dob:"23/02/1983",
//         email:"ms_blunt@gmail.com",
//         password:"holywood202",
//         phone: '9455667788' ,
//         country:"USA",
//         city:"New Jersey",
//         account_open_on:""
    
    
    
//     },
//     {
//         id:4,
//         first_name:"Tessa",
//         middle_name:"Lyn",
//         last_name:"Thompson",
//         dob:"03/10/1983",
//         email:"lifeline@gmail.com",
//         password:"blackpanther",
//         phone: '0104840022' ,
//         country:"USA",
//         city:"New York",
//         account_open_on:""
    
//     }
//     ]


//to get every User
router.get('/', (req, res) => {
    User.find().then(user=>res.send(user))
});

//Create user
// router.post('/', (req, res) =>{
//     const newuser = {
//         id:uuid.v4(),
//         first_name:req.body.first_name,
//         middle_name:req.body.middle_name,
//         last_name:req.body.last_name,
//         dob:req.body.dob,
//         email:req.body.email,
//         password:req.body.password,
//         phone:req.body.phone,
//         country:req.body.country,
//         city:req.body.city     
//     }
//     if( !newuser.first_name || !newuser.middle_name || !newuser.dob || 
//         !newuser.password){

//             return res.status(400).json({msg: 'Please include the required data'});
//         }

//         users.push(newuser);
//         res.json(users);
// });

//register new user
router.post('/register', async (req,res) => {
    const { email, dob, name, password, phone, location, account_open_on }  = req.body
    const user = await User.findOne({email})
    if(user) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newUser = new User({
            name,
            email,
            password: hashedPassword ,
            dob,
            phone,
            location,
            eventsAttended: [],
            account_open_on
        })
    newUser
    .save()
    .then(user => res.json({data: user}))
    .catch(err => res.json({error: 'Can not create user'}))
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


module.exports=router
    
    
    
    
