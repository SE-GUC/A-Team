const express= require('express');
const router= express.Router();
const moment= require('moment')
const Task = require('../../models/Task') //mongo
const mongoose = require('mongoose')
const uuid= require('uuid')
const joi = require('joi')

router.post('/add_task', async (req,res) => {
    const newTask = new Task({
        name:"First Task!!",
        time_of_post: new Date(),
        time_of_review:'',
        monetary_compensation: 2000,
        price:898989,
        time_of_assingment:'',
        is_assigned:false,
        assigned_id:undefined,
        time_expected:"3 days",
        level_of_comitment:"High",
        is_reviewed:false,
        experience_needed:"6 months",
        description:"This is not a request",
        p_id:undefined,
        skills:["Mongo","Express","React","Node.js"],
        response_from_admin:'',
        admin_id: mongoose.Types.ObjectId(),
        applicants:[] 
        })
    newTask
    .save()
    .then(task => res.json({data: task}))
    
})
    
//Show All Tasks/

//Youssef Shalaby

router.post('/add',async (req,res)=>{
    //adding a task ith appropriate parenthesis
    const status= joi.validate(req.body,{
        name:joi.string().max(40).required(),
        time_of_post: joi.date(),
        time_of_review: joi.date(),
        monetary_compensation: joi.number().required(),
        price:joi.number().required(),
        time_of_assingment:joi.date(),
        is_assigned:joi.boolean(),
        assigned_id:joi.string().length(24),
        time_expected:  joi.string().required(),
        level_of_comitment:joi.string().required(),
        is_reviewed:joi.boolean(),
        experience_needed:joi.string().required(),
        description:joi.string().min(10).required(),
        p_id:joi.string().length(24),
        skills: joi.array().items(joi.string()),
        response_from_admin:joi.string().allow('').optional(),
        admin_id: joi.string().length(24),
        applicants:joi.array().items(joi.string().length(24))
    })
    if (status.error) {
        return res.json({ error: status.error.details[0].message })
  }
  try{
  const new_task= await new Task({
    _id:mongoose.Types.ObjectId(),  
    name:req.body.name,
    time_of_post: new Date(),
    time_of_review:'',
    monetary_compensation: req.body.monetary_compensation,
    price:req.body.price,
    time_of_assingment:'',
    is_assigned:false,
    assigned_id:undefined,
    time_expected:req.body.time_expected,
    level_of_comitment:req.body.level_of_comitment,
    is_reviewed:false,
    experience_needed:req.body.experience_needed,
    description:req.body.description,
    p_id:undefined,
    skills:req.body.skills,
    response_from_admin:'',
    admin_id: mongoose.Types.ObjectId(),
    applicants:[] 
  }).save()
  return res.json({data:new_task})
}
catch(err){
    console.log(err.message)
    return res.json({ error: `Error, couldn't create a new Task with the following data` })
}




    

})
router.put('/edit/:id', (req, res) => {
    //editing a task with nullifying
    const time_of_post=req.body.time_of_post
    const time_of_review=req.body.time_of_review
    const monetary_compensation=req.body.monetary_compensation
    const price=req.body.price
    const time_of_assingment=req.body.time_of_assingment
    const is_assigned=req.body.is_assigned
    const assigned_id=req.body.assigned_id
    const time_expected=req.body.time_expected
    const level_of_comitment=req.body.level_of_comitment
    const is_reviewed=req.body.is_reviewed
    const experience_needed=req.body.experience_needed
    const description=req.body.description
    const p_id=req.body.p_id
    const skills=req.body.skills
    const response_from_admin= req.body.response_from_admin
    const admin_id=req.body.admin_id
    const task_id= req.params.id

//add updates
    const edit = Task.find(edit => edit.id === task_id)
    if(edit){
    edit.time_of_post=time_of_post
    edit.time_of_review=time_of_review
    edit.monetary_compensation=monetary_compensation
    edit.price=price
    edit.time_of_assingment=time_of_assingment
    edit.is_assigned=is_assigned
    edit.assigned_id=assigned_id
    edit.time_expected=time_expected
    edit.level_of_comitment=level_of_comitment
    edit.is_reviewed=is_reviewed
    edit.experience_needed=experience_needed
    edit.description=description
    edit.p_id=p_id
    edit.skills=skills
    edit.response_from_admin=response_from_admin
    edit.admin_id=admin_id
    res.send(Task)
    }
    else{
        res.status(500).json({msg:'Member not found'})
    }
    
})
router.delete('/remove/:id',(req,res)=>{
    //removing a task
    const task_id = req.params.id 
    const task = Task.find(task => task.id === task_id)
    const index = Task.indexOf(task)
    Task.splice(index,1)
    res.send(Task)
});
//Farah Abdelsalam
router.post('/inv',(req,res) => {
    //posting an invite
    const newInv = {
        memID: req.body.memID,
        taskID: req.body.taskID
    }
    if(!newInv.memID || !newInv.taskID) {
        return res.status(400).json({msg: 'Error Occured'});
    }
    taskOrientation.push(newInv);
    res.json(taskOrientation);
});
router.get('/inv',(req,res) => {
    //getting an invite
    res.json(taskOrientation);
});
router.post('/notif',(req,res) => {
    //posting a notfication
    const newNotif = {
        memID: req.body.memID,
        taskID: req.body.taskID
    }
    if(!newNotif.memID || !newNotif.taskID) {
        return res.status(400).json({msg: `Erorr`});
    }
    notif.push(newNotif);
    res.json(notif);
});
router.get('/notif',(req,res) => {
    //showing a notification
    res.json(notif);
});
//Amr 'Manga' Nashaat
router.get('/get/:id', (req,res) => {
    //Getting a task via id
    const tasks=Task
    const found = tasks.some(tasks => tasks.id == req.params.id);
    if(found) {
        res.json(tasks.filter(tasks => tasks.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
router.put('/update/:id', (req,res) => {
    //updating a Task with the given inputs
    const tasks=Task
    const found = tasks.some(tasks => tasks.id == req.params.id);
    const updateTask = req.body; //getting response_From_admin
    if(found) {
        tasks.forEach(tasks => {
            if(tasks.id === req.params.id) {
                tasks.response_from_admin = updateTask.response_from_admin ? updateTask.response_from_admin : tasks.response_from_admin;
                res.json({msg: `Task updated`, tasks});
            }
        });
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
//Aly Zamzamy
router.put('/review/:id', (req,res)=>{
    //accepting a task upload via id
    const found = Task.some(task => task.id === (req.params.id));

    if(found){

        Task.forEach(t => {
            if(t.id === (req.params.id)){
            t.is_reviewed = true ;
            res.json({msg: 'task updated', Task});
        }
        });
        }
    else{
      res.status(400).json({msg : 'no member with the id ${req.params.id} '} ) ;

    }


        });
//Mohammed Islam
router.get('/users/:id', (req,res) => {
    //getting a user with his id
    const found = users.some(users => users.id == req.params.id);
    if(found) {
        res.json(users.filter(users => users.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
router.get('/Tasks/:id', (req,res) => {
    //getting a specfic task
    const found = Task.some(tasks => tasks.id == req.params.id);
    if(found) {
        res.json(Task.filter(tasks => tasks.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
router.put('/:id', (req,res) => {
    //assigning a request to a member
    const found = Task.some(task => task.id === req.params.id);
    const updateTask = req.body; 
    if(found) {
        Task.forEach(task => {
            if(task.id === req.params.id) {
                task.is_assigned = updateTask.is_assigned ? updateTask.is_assigned : task.is_assigned;
                task.assigned_id = updateTask.assigned_id ? updateTask.assigned_id : task.assigned_id;
                res.json({msg: `Task updated`, Task});
            }
        });
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});

module.exports=router