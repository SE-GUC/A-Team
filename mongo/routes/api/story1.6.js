const express = require('express')
const router = express.Router()
const moment= require('moment')

const Tasks = require('../../models/Task')
const users = require('../../models/User') //mongo

const uuid = require('uuid')
const joi = require('joi')
const mongoose = require('mongoose')

router.get('/t',async(req,res) => {
    res.json("hello")
    });
router.get('/',async(req,res) => {
    const task = await Tasks.find()
    res.json({data: task})
    });
   
    router.post('/add_task', async (req,res) => {
        const newTask = new Tasks({
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
        .then(Tasks => res.json({data: Tasks}))
        })
    
    
router.get('/users/:id',async (req,res) => {
    const id = req.params.id
    const user = await users.findOne({id})
    if(!user) return res.status(404).send({error: 'User does not exist'})
    else
    res.json({data: user})
    });

    router.get('/Tasks/:id', async (req,res) => {
        const id = req.params.id
        const task = await Tasks.findOne({id})
        if(!task) return res.status(404).send({error: 'User does not exist'})
        else
        res.json({data: task})
        });



        router.put('/:id',async (req,res) => {
            const id = req.params.id
            const task = await Tasks.findOne({id})
            const updateTask = req.body; 
            if(!task) return res.status(404).send({error: 'User does not exist'})
        else
       {
           task.is_assigned=updateTask.is_assigned;
           task.assigned_id = updateTask.assigned_id
           res.json({msg: `Task updated`, Tasks});
       }
        });
        
        module.exports=router;

    