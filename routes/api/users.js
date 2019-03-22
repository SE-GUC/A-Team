const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const joi = require('joi');
const session= require('express-session');

app.use(session({secret:"jK47hge2", resave:false, saveUninitialized:true}));
//to get every User
router.get('/', (req, res) => {
    User.find().then(user=>res.send(user))
});

//login
router.post('/login', function(req, res){
  var email= req.body.email;
  var password= req.body.password;

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
    
    
    
    
