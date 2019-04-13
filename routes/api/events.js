const joi = require('joi')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const moment = require('moment')

const Event = require('../../models/Event')
const Type = require('../../models/Type')
const User= require('../../models/User')



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
    return res.json({ error: `Error, couldn't find a event given the following type` })
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
    return res.json({ error: `Error, couldn't find a event given the following type` })
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
router.route('/:type').get(async (request, response) => {
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



router
  .route('/')
  .post(async (request, response) => {
    const status = joi.validate(request.body, {
      price: joi.array().items(joi.number().required()),
      location: joi.string().length(24).required(),
      name: joi.string().min(6).max(30).required(),
      about: joi.string().min(5).max(500).required(),
      remaining_places: joi.number().required(),
      speakers: joi.array().items(joi.string().min(4).max(70)),
      topics: joi.array().items(joi.string().min(3).max(70)),
      type: joi.array().items(joi.string().min(3).max(20)).required(),
      partner_initiated: joi.string().length(24).required(),
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
        partner_initiated: request.body.partner_initiated,
        status:'PENDING_APPROVAL',
        time_of_edit: moment().format('MMMM Do YYYY, h:mm:ss a'),
        attendees: [],
        feedbacks: [],
        applicants: []
      }).save()
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: `Error, couldn't create a new book with the following data` })
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

  router.get('/getEligible/:id', async(req,res)=> {
    var user = await User.findById(req.params.id).exec()
    console.log(user)
    var allEvents = await Event.find({}).exec()
    console.log(intersection_destructive(allEvents[0].status !== 'PENDING_APPROVAL'))
    var result=[]
    for(var i=0;i<allEvents.length;i++) {
      if(intersection_destructive(user.interests,allEvents[i].type).length>0 && allEvents[i].status !== 'PENDING_APPROVAL'){
        console.log('ana get hena')
        result.push(allEvents[i])
      }
    }
    console.log(result)
    return res.json({ data: result })
  })

  function intersection_destructive(a, b)
  {
  var result = [];
  while( a.length > 0 && b.length > 0 )
  {  
     if      (a[0] < b[0] ){ a.shift(); }
     else if (a[0] > b[0] ){ b.shift(); }
     else
     {
       result.push(a.shift());
       b.shift();
     }
  }

  return result;
  }

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
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        applicant_id: joi.string().length(24).required(),
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      const applicant = {
        _id: mongoose.Types.ObjectId(),
        applicant_id: request.body.applicant_id,
        is_accepted: false
      }
      const event = await Event.findByIdAndUpdate(request.params.id, { $push: { applicants: applicant } }).exec()
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: `Error, couldn't find application for a event given the following data` })
    }
  })
  .put(async (request,response)=>{
    try {
      const status = joi.validate(request.body, {
        applicant_id: joi.string().length(24).required(),
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
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        user_id: joi.string().length(24).required(),
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
      const event = await Event.findByIdAndUpdate(request.params.id, { $push: { feedbacks: feedback } }).exec()
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: `Error, couldn't vote for a event given the following data` })
    }
  })
  .put(async (request,response)=>{
    try {
      const status = joi.validate(request.body, {
        user_id: joi.string().length(24).required(),
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
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        admin_id: joi.string().length(24).required(),
        response: joi.string().min(6).required(),
        is_accepted: joi.boolean().required()  
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      const response = {
        _id: mongoose.Types.ObjectId(),
        admin_id: request.body.admin_id,
        is_accepted: request.body.is_accepted
      }
      const event = await Event.findByIdAndUpdate(request.params.id, { $push: { responses_from_admin: response } }).exec()
      return response.json({ data: event })
    } catch (err) {
      return response.json({ error: `Error, couldn't find application for a event given the following data` })
    }
  })

  router.get('/getMyEvents/:id', async(req,res)=>{
    try{
      const eventsPartnerCreated=Event.find({partner_initiated:req.params.id})
      return res.json({ data: eventsPartnerCreated })
  } catch (err) {
    return res.json({ error: `Error, couldn't find application for a event given the following data` })
  }

  })
  
  
module.exports=router 
