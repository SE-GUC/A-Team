const express = require('express');
const path = require('path');
const router = express.Router();
const users = require('../../users');
const Tasks = require('../../tasks');


router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get('/',(req,res) => {
res.json(Tasks);
});


router.get('/users/:id', (req,res) => {
    const found = users.some(users => users.id == req.params.id);
    if(found) {
        res.json(users.filter(users => users.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});

router.get('/Tasks/:id', (req,res) => {
    const found = Tasks.some(tasks => tasks.id == req.params.id);
    if(found) {
        res.json(Tasks.filter(tasks => tasks.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});

router.put('/:id', (req,res) => {
    const found = Tasks.some(task => task.id === req.params.id);
    const updateTask = req.body; 
    if(found) {
        Tasks.forEach(task => {
            if(task.id === req.params.id) {
                task.is_assigned = updateTask.is_assigned ? updateTask.is_assigned : task.is_assigned;
                task.assigned_id = updateTask.assigned_id ? updateTask.assigned_id : task.assigned_id;
                res.json({msg: `Task updated`, Tasks});
            }
        });
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});

module.exports=router;