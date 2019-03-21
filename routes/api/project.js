const express= require('express');
const router= express.Router();
const moment= require('moment')
const joi= require('joi')
const mongoose = require('mongoose')
const Tasks = require('../../models/Task') 
const Project= require('../../models/Project') 

router.post('/create',async (req,res)=>{
    try{
    const proj= await new Project({
        _id:mongoose.Types.ObjectId(),
        project_name: req.body.project_name,
        date_Posted: new Date(),
        partner_responsible: mongoose.Types.ObjectId(),
        consultancy_agency_sponsor:mongoose.Types.ObjectId(),
        Tasks:[]
    }).save()
    return res.json({proj})
    }catch(err){
        console.log(err.message)
        return res.json({ error: `Error, couldn't create a new Project with the following data` })
    }


});

router
  .route('/:id/addTask')
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
        taskid:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const proj = await Project.findByIdAndUpdate(request.params.id, { $push: { Tasks: request.body.taskid } }).exec()
      return response.json({ data: proj })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })

module.exports=router