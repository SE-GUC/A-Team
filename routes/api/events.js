const joi = require('joi')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

const Event = require('../../models/Event')

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

// {
// 	"applicant_id":"asdfghjklzxcvbnmqwertyui",
// 	"isAccepted":true
// }

// {
// 	"applicant_id":"ahmedasdfghlololololasdg",
// 	"isAccepted":true
// }

router.get('/location/:location', (req,res) => {
    //const updateTask = req.body;
    //const foundlocation=updateTask.id?true:false; 
    
    events.forEach(event => {
        if(event.location === req.params.location) {
            res.json(event);
        }
    });

});
router.get('/basedescription/:des', (req,res) => {
     
    events.forEach(event => {
        if(event.description === req.params.des) {
            res.json(event);
        }
    });
});
router.get('/registerationprice/:price', (req,res) => {
     
    events.forEach(event => {
        if(event.price === req.params.price) {
            res.json(event);
        }
    });
});
router.get('/places/:place', (req,res) => {
     
    events.forEach(event => {
        if(event.remaining_places === req.params.place) {
            res.json(event);
        }
    });
});
router.get('/speakers/:speakers', (req,res) => {
     
    events.forEach(event => {
        if(event.speakers === req.params.speakers) {
            res.json(event);
        }
    });
});
router.get('/topics/:topics', (req,res) => {
     
    events.forEach(event => {
        if(event.topics === req.params.topics) {
            res.json(event);
        }
    });
});




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
      remaining_places: joi.number().required(),
      location: joi.string().length(24).required(),
      name: joi.string().min(6).max(30).required(),
      about: joi.string().min(5).max(500).required(),
      price: joi.number().required(),
      speakers: joi.array().items(joi.string().min(4).max(70)),
      topics: joi.array().items(joi.string().min(4).max(70)),
      type: joi.string().min(5).max(20).required(),
      partnerInitiated: joi.string().length(24).required(),
      attendees: joi.array().items(joi.string().min(4).max(70)),
      request: joi.string().length(24).required(),
      feedbacks: joi.array().items(joi.object().keys({
        user_id: joi.string().length(24).required(),
        comment: joi.string().required()
      })),
      applicants: joi.array().items(joi.object().keys({
        applicant_id: joi.string().length(24).required()
      }))

    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
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
        partnerInitiated: request.body.partnerInitiated,
        attendees: request.body.attendees,
        request: request.body.request,
        feedbacks: request.body.ratings || [],
        applicants: request.body.ratings || []
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
        isAccepted: false
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
        isAccepted: joi.boolean().required()
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      const applicant = {
        _id: mongoose.Types.ObjectId(),
        applicant_id: request.body.applicant_id,
        isAccepted: request.body.isAccepted
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



  
module.exports=router 
