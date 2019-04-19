const joi = require('joi')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const moment = require('moment')
const Location = require('../../models/Location')
const Event = require('../../models/Event')
const Type = require('../../models/Type')
const User= require('../../models/User')
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey


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


router.get('/getEligible', checkToken, async(req,res)=> {
  jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
    if(err){
        //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
        try{

        
        // console.log(authorizedData)
        var allEvents = await Event.find({}).exec()
        // console.log(allEvents)
        const user = await User.findById(authorizedData.id).exec()
        // console.log(user)
        var result=[]
        // console.log(user.interests)
        for(var i=0;i<allEvents.length;i++) {
          const interests=user.interests
          const types =allEvents[i].type
          var intersection = interests.filter(value => types.includes(value))
          // console.log(intersection)

          if(intersection.length>0 ){
            console.log(user.interests)
            result.push(allEvents[i])
          }
        }
        console.log('SUCCESS: Connected to protected route');
        // console.log(result)
        return res.json({ data: result })
      }
      catch(err){
        console.log(err)
      }
    
    }
})

})




router.get('/getBySpeakers/:speaker', async(req,res)=>{
  try {
    const allEvents = await Event.find({}).exec()
    var result=[]
    allEvents.forEach(event =>{
      if (event.speakers.includes(req.params.speaker)){
        result.push(event)
      }
    })
    return res.json({ data: result }) 
  } catch (err) {
    return res.json({ error: `Error, couldn't find an event given the following speaker` })
  }
})
router.get('/FilterByPrice/:Price', async(req,res)=>{
 try{ const allEvents=await Event.find({}).exec()
  var r= []
  allEvents.forEach(event =>{
    if (event.price[0]<parseInt(req.params.Price+1)){
      r.push(event)
    }
  })
  return res.json({data: r })
}
catch(err){
  return res.json({ error: `Error, couldn't find an event given the following price` })
}
})



router.get('/getByRemainginPlaces/:places', async(req,res)=>{
  try {
    const allEvents = await Event.find({}).exec()
    var result=[]
    allEvents.forEach(event =>{
      if (event.remaining_places<parseInt(req.params.places)){
        result.push(event)
      }
    })
    return res.json({ data: result }) 
  } catch (err) {
    return res.json({ error: `Error, couldn't find an event given the following place` })
  }
})

router.get('/getByTopics/:topic', async(req,res)=>{
  try {
    const allEvents = await Event.find({}).exec()
    var result=[]
    allEvents.forEach(event =>{
      if (event.topics.includes(req.params.topic)){
        result.push(event)
      }
    })
    // const event = await Event.find({type:request.params.type}).exec()
    console.log(result)
    return res.json({ data: result }) 
  } catch (err) {
    return res.json({ error: `Error, couldn't find an event given the following topic` })
  }
})

router
  .route('/getID/:id')
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
      const event = await Event.findById(request.params.id)
      console.log(event)
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })


// {
//   "remaining_places": 300,
//     "location": "5c9bff7f569b9a001796d40a",
//     "about": "MERN Programming Style",
//     "price": 55,
//     "speakers": ["Abdelraouf", "Steve Jobs"],
//     "topics": ["MERN", "JavaScript"],
//     "type": "Computer Science",
//     "partnerInitiated": "5c93cd1f1c9fe35274d2f624",
//     "request":"5c93cd1f1c9fe35274d2f624",
//     "attendees": ["5c93cd1f1c9fe35274d2f624","5c93cd1f1c9fe35274d2f624"]

// }

router.get('/getPending', async (req,res)=>{
  var allEvents = await Event.find({}).exec()
  allEvents.filter(lessa_pending)
  console.log(allEvents)
  return res.json({ data: allEvents })
})
//not tested lesa
router
  .route('/getPendingId/:id')
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
      var allEvents = await Event.find({}).exec()
      allEvents.filter(lessa_pending)
      const event = allEvents.findById(request.params.id)
      console.log(event)
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })

router.post('/createType', async (request, response) => {
  const status = joi.validate(request.body, {
      name: joi.string().required(),
    })
    if (status.error) {
      return response.json({ error: status })
    }
    try {
      const newType = await new Type({
        name: request.body.name
      }).save()
      return response.json({ data: newType })
    } catch (err) {
      return response.json({ error: `Error, couldn't create a new Type with the following data` })
    }
  })

  router.get('/getTypes', async (request, response) => {
    try {
      const types = await Type.find({}).exec()
      var allTypes =[]
      for(var i =0;i<types.length;i++) {
        allTypes.push(types[i].name)
      }
      return response.json({ data: allTypes })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })
  router.get('/getTypesHoss', async (request, response) => {
    try {
      const types = await Type.find({}).exec()
      var allTypes =[]
      return response.json({ data: types })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })

  router.delete('/deleteTypes/:id', async (request, response) => {
    Type.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a Type given the following data` })
      }
    })
  })
  
//get all events with a type "task 2.3" na2sa testing
router.route('/getByType/:type').get(async (request, response) => {
  try {
    const allEvents = await Event.find({}).exec()
    var result=[]
    allEvents.forEach(event =>{
      if (event.type.includes(request.params.type)){
        result.push(event)
      }
    })
    // const event = await Event.find({type:request.params.type}).exec()
    console.log(result)
    return response.json({ data: result })
  } catch (err) {
    return response.json({ error: `Error, couldn't find a event given the following type` })
  }
})

router.get('/get_events/:location', async(req,res)=> {
  try {
    const final  = await Event.find({location:req.params.location})
    console.log(final)
    res.json({

      data:final
    })
    
  } catch (err) {
    res.json({
      err
    })
  }
})



router
  .route('/')
  .post(checkToken,async (request, response) => {
    const status = joi.validate(request.body, {
      price: joi.array().items(joi.number().required()),
      location: joi.string().length(24).required(),
      name: joi.string().min(6).max(30).required(),
      about: joi.string().min(5).max(500).required(),
      remaining_places: joi.number().required(),
      speakers: joi.array().items(joi.string().min(4).max(70)),
      topics: joi.array().items(joi.string().min(3).max(70)),
      type: joi.array().items(joi.string().min(3).max(20)).required(),
      // partner_initiated: joi.string().length(24).required(),
      attendees: joi.array().items(joi.string().length(24)),
      status: joi.string(),
      feedbacks: joi.array().items(joi.object().keys({
        user_id: joi.string().length(24).required(),
        comment: joi.string().required()
      })),
      applicants: joi.array().items(joi.object().keys({
        applicant_id: joi.string().length(24).required()
      })),
      responses_from_admin: joi.array().items(joi.object().keys({
        admin_id: joi.string().length(24).required(),
        response: joi.string(),
        is_accepted: joi.boolean()
      }))

    })
    if (status.error) {
      return response.json({ error: status })
    }
    try {
      jwt.verify(request.token, tokenKey, async (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            response.sendStatus(403);
        } else {
            
          const event = await new Event({
            _id: mongoose.Types.ObjectId(),
            remaining_places: request.body.remaining_places,
            location: request.body.location,
            name: request.body.name,
            about: request.body.about,
            price: request.body.price,
            speakers: request.body.speakers,
            topics: request.body.topics,
            type: request.body.type,
            partner_initiated: authorizedData.id,
            status:'PENDING_APPROVAL',
            time_of_edit: moment().format('MMMM Do YYYY, h:mm:ss a'),
            attendees: [],
            feedbacks: [],
            applicants: []
          }).save()
          return response.json({ data: event })
        }
    })
      
    }
     catch (err) {
      return response.json({ error: `Error, couldn't create a new event with the following data` })
    }
  })
  .get(async (request, response) => {
    try {
      const allEvents = await Event.find({}).exec()
      return response.json({ data: allEvents })
    } catch (err) {
      return response.json({ error: `Error, Couldn't fetch the list of all events from the database` })
    }
  })


  // function intersection(a, b)
  // {
  // var result = [];
  // while( a.length > 0 && b.length > 0 )
  // {  
  //    if      (a[0] < b[0] ){ a.shift(); }
  //    else if (a[0] > b[0] ){ b.shift(); }
  //    else
  //    {
  //      result.push(a.shift());
  //      b.shift();
  //    }
  // }

  function lessa_pending(a) {
    if(a.status==='PENDING_APPROVAL'){
      return true
    }
    else return false
  }

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
      const event = await Event.findById(request.params.id)
      console.log(event)
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })
  .put(async (request, response) => {
    Event.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a event given the following data` })
      }
    })
  })
  .delete((request, response) => {
    Event.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a event given the following data` })
      }
    })
  })

  router
  .route('/:id/apply')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .post(checkToken,async (request, response) => {
    try {
      jwt.verify(request.token, tokenKey, async (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            response.sendStatus(403);
        } else {
            
          const applicant={
            applicant_id:authorizedData.id,
            is_accepted:false
          }
          const event = await Event.findByIdAndUpdate(request.params.id, { $push: { applicants: applicant } }).exec()
          console.log('SUCCESS: Connected to protected route');

          //If token is successfully verified, we can send the autorized data 
            return response.json({data: event
            });
        }
    })
    } catch (err) {
      return response.json({ error: `Error, couldn't find application for a event given the following data` })
    }
  })
  .put(async (request,response)=>{
    try {
      const status = joi.validate(request.body, {
        is_accepted: joi.boolean().required()
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      const applicant = {
        _id: mongoose.Types.ObjectId(),
        applicant_id: request.body.applicant_id,
        is_accepted: request.body.is_accepted
      }
      const event = await Event.findByIdAndUpdate(request.params.id, { $set: { applicants: applicant } }).exec()
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: `Error, couldn't find application for a event given the following data` })
    }

  })

  router
  .route('/:id/feedback')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .post(checkToken,async (request, response) => {
    try {
      jwt.verify(request.token, tokenKey, async (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log(err);
            response.sendStatus(403);
        } else {
            
          const feedback = {
            user_id: authorizedData.id,
            comment: request.body.comment,
            rate: request.body.rate
          }
          const event = await Event.findByIdAndUpdate(request.params.id, { $push: { feedbacks: feedback } }).exec()
          console.log('SUCCESS: Connected to protected route');

          //If token is successfully verified, we can send the autorized data 
            return response.json({data: event
            });
        }
    })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })
  .put(async (request,response)=>{
    try {
      const status = joi.validate(request.body, {
        comment: joi.string().required(), 
        rate: joi.number()
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      const feedback = {
        _id: mongoose.Types.ObjectId(),
        user_id: request.body.user_id,
        comment: request.body.comment,
        rate: request.body.rate
      }
      const event = await Event.findByIdAndUpdate(request.params.id, { $set: { feedbacks: feedback } }).exec()
      console.log('walla hena??')
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: `Error, couldn't vote for a event given the following data` })
    }

  })
  .get(async (request, response) => {
    try {
      const event = await Event.findById(request.params.id).exec()
      const feedbacks=event.feedbacks
      return response.json({ data: feedbacks })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })


  router
  .route('/:id/adminResponse')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .post(checkToken,async (request, response) => {
    try {
      jwt.verify(request.token, tokenKey, async (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            response.sendStatus(403);
        } else {
          const responsefromadmin = {
            admin_id: authorizedData.id,
            is_accepted: request.body.is_accepted
          }
          const event = await Event.findByIdAndUpdate(request.params.id, { $push: { responses_from_admin: responsefromadmin } }).exec()
          console.log('SUCCESS: Connected to protected route');

          //If token is successfully verified, we can send the autorized data 
            return response.json({data: event
            });
        }
    })
    } catch (err) {
      return response.json({ error: `Error, couldn't find application for a event given the following data` })
    }
  })  
  
module.exports=router 