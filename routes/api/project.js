const express= require('express');
const router= express.Router();
const moment= require('moment')
const joi= require('joi')
const mongoose = require('mongoose')
const Tasks = require('../../models/Task') 
const Project= require('../../models/Project') 


router.get('/',async(req,res)=>{
  try{
  const t =await Project.find()
  res.json({data:t
  })
  }catch(err){res.data('Request Erorr')}
});
router.post('/create',async (req,res)=>{
    try{
    const proj= await new Project({
        _id:mongoose.Types.ObjectId(),
        project_name: req.body.project_name,
        description:req.body.description,
        date_Posted: req.body.date_Posted,
        partner_responsible: mongoose.Types.ObjectId(),
        consultancy_agency_assigned:req.body.consultancy_agency_assigned,
        skills: [],
        consultancy_agency_sponsor:mongoose.Types.ObjectId(),
        tasks:[],
        consultancy_agency_applicants:[]

    }).save()
    return res.json({proj})
    }catch(err){
        console.log(err.message)
        return res.json({ error: `Error, couldn't create a new Project with the following data` })
    }
});

router
.route('/crud')
  .all(async (request, response, next) => {
    const status = joi.validate(request.body, {
      id: joi.string().length(24).required(),
      update: joi.allow()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
})
.get(async(request,response)=>{
    try {
        const project = await Project.findById(request.body.id).exec()
        return response.json({ data: project })
      } catch (err) {
        return response.json({ error: `Error, couldn't find a Project given the following id` })
  }
})
.put(async(request,response)=>{
    //update by id
    Project.findByIdAndUpdate(request.body.id,request.body.update,{new:true},(err,model)=>{
        if(!err){
            return response.json({updated:model})
        }
        else{
            return response.json({error:'Could not Update'})
        }
    })
})    
.delete(async(request,response)=>{
    //delete by id
    Project.findByIdAndDelete(request.body.id,(err,model)=>{
        if(!err){
            return response.json({message:'The Project Was Deleted Successfuly'})
        }
        else{
            return response.json({message:'Deletion failed!'})
        }
    })
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

  //(Consultancy Agency) I can Apply on a project
  router
  .route('/applyProj/:id')
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
        consultancy_agency_id:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const project = await Project.findByIdAndUpdate(request.params.id, { $push: { consultancy_agency_applicants: request.body.consultancy_agency_id } }).exec()
      return response.json({ data: project })
    } catch (err) {
      return response.json({ error: `Error` })
    }
  });  

module.exports=router