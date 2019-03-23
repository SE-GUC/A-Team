const express= require('express');
const router= express.Router();
const moment= require('moment')
const Tasks = require('../../models/Task') //mongo
const joi = require('joi')
const mongoose = require('mongoose')
const Task = require('../../models/Task') //mongo


//add random task tester
router.post('/add_task', async (req,res) => {
    const newTask = new Task({
        name:"Octane",
        time_of_post: new Date('01.02.2012'),
        time_of_review:new Date('01.02.2012'),
        monetary_compensation: 2000,
        price:898989,
        time_of_assingment:new Date('01.02.2012'),
        is_assigned:false,
        assigned_id:'',
        time_expected:"3 days",
        level_of_comitment:"High",
        is_reviewed:false,
        experience_needed:"6 yrs",
        description:"Be aware of the new kill leader",
        p_id:'',
        skills:["Apex Legends"],
        response_from_admin:'',
        admin_id:1,
        applicants:[1,2,3] 
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
/*
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
    //asd
    notif.push(newNotif);
    res.json(notif);
});
router.get('/notif',(req,res) => {
    //showing a notification
    res.json(notif);
});
*/
//---------------------------------------------
//MONGO DB IMPLEMENTATION
//Amr 'Manga' Nashaat



//Create Task Mongo
router.post('/', async(req,res) => {
    try{
    const {name, time_of_post, time_of_review, monetary_compensation, price, time_of_assingment, is_assigned, assigned_id, time_expected, level_of_comitment, is_reviewed, experience_needed, description,p_id,response_from_admin, admin_id, applicants } = req.body
    const new_task = new Task({
        name,
        time_of_post,
        time_of_review, 
        monetary_compensation, 
        price,
        time_of_assingment, 
        is_assigned, 
        assigned_id,
        time_expected,
        level_of_comitment,
        is_reviewed, 
        experience_needed,
        description,p_id,
        response_from_admin,
        admin_id, 
        applicants 
    })
    new_task
    .save()
    //.then(Tasks => res.json({data: new_task}))
    res.json({msg: 'Task added', data:new_task})
} catch(error) {
    console.log("oops")
}
        
})
//UPDATE TASK MONGO
router.put('/:id', async(req,res) => {
        Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, model) => {
            if(!err) {
                return res.json({data:model})
            } else {
                return res.data({error: `Can't find task`})
            }
        } )
      
})

//DELETE TASK MONGO
//Manga
router.delete('/:id', async(req,res) => {
        const name = req.params.name
        Tasks.findByIdAndDelete(req.params.id, (err,model) => {
            if(!err) {
                return res.json({data:null})
            } else {
                return res.json({error: 'Error, cant delete'})
            }
        })
        if(!deletedTask) return res.status(404).send({error: 'Task doesnt exist'})
        res.json({msg: `Task ${name} deleted`, data: deletedTask})
    
}) 
//READ TASK MONGO
router.get('/view_tasks', async (req,res) => {
    const tasking = await Tasks.find()
    res.json({data: tasking})
})
//STORY 1.3, READ TASK'S DESC
router.get('/view_tasks/:id', async (req,res) => {
    const t = await Tasks.findById(req.params.id)
    res.json({data: t.description})
})
//STORY 1.3, UPDATE TASK'S RESPONSE FROM ADMIN
router.put('/update_task/:id', async(req,res) => {
    const tasking = await Tasks.findById(req.params.id)

})
//UPDATING TASK'S DESC IS REPITITVE SINCE WE CAN ALREADY
//UPDATE ANYTHING IN THE ENTIRE TASK
//---------------------------------------------------------------------







//OLD DISPLAY ON TASK ID
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
//NEW DISPLAY ON TASK ID
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
let id= req.params.id;
    // check for req are valid
 
Tasks.findOneAndUpdate({_id:id},{is_reviewed:true} ,function(err,result){
if(err)
{

res.status(500); // bad request is being sent
res.json({'error':' internalServerErrorInReview '});;
}
else if(result ==null)
{
    res.status(404); // bad request is being sent
    res.json({'error':'taskToBeReviewedIsNotFound'});;
}
else
{
    res.status(200);
}
    
});   });





router.put('/revvv/:id', async(req,res) => {
            try{
            const task = await Tasks.findOne({id})
            if(!task) return res.status(404).send({error: 'Task does not exist'})
            
            task.is_reviewed=true;
            res.json({msg:'Updated Task'})
        
        } catch(error) {
            console.log("cant update")
            res.json({msg: 'cant update'})
        }
    })





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
module.exports=router