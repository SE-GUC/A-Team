const express= require('express');
const router= express.Router();
const joi = require('joi');
//const app = express();
//app.use(express.json());
const Member = require('../../models/Member');
const mongoose = require('mongoose')



router
  .route('/:id/notifyMember')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message   })
    }
    next()
  })//el file kolo
  .get(async (request, response) => {
    try {
      const notif = await Member.findById(request.params.id).exec()
      return response.json({ notifications: notif.notifications })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a event given the following id` })
    }
  })
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        taskid:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      // const task={
      //   taskid: request.body.taskid i

      // }
      
      const member = await Member.findByIdAndUpdate(request.params.id, { $push: { notifications: request.body.taskid } }).exec()
      return response.json({ data: member })
    //  return res.json({data:member})
    } catch (err) {
      return response.json({ error: err.message })
    }
  });
// router.post('/:id/notifyMember', async( req,res) => {
//   const notifications = req.body
//   Member.findByIdAndUpdate(req.params.id, notifications, {new: true}, (err,model) => {
//     if(!err) {

//       return res.json({data:model})
//     } else {
//       return res.data({error: `cant find member`})
//     }
//   })

// })
  module.exports=router