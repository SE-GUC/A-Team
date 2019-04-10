const joi = require('joi')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const moment = require('moment')

const Event = require('../../models/Event')
const Type = require('../../models/Type')

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

//get all events with a type "task 2.3" na2sa testing
router.route('/:type').get(async (request, response) => {
  try {
    const event = await Event.find({type:request.params.type}).exec()
    return response.json({ data: event })
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
      topics: joi.array().items(joi.string().min(4).max(70)),
      type: joi.array().items(joi.string().min(5).max(20)).required(),
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













  
module.exports=router 
