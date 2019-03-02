const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const tasks = require('../../Tasks')

router.get('/',(req,res) => {
    res.json(tasks);
});
//Get single task on ID
router.get('/:id', (req,res) => {
    const found = tasks.some(tasks => tasks.id == req.params.id);
    if(found) {
        res.json(tasks.filter(tasks => tasks.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
//create task
/*router.post('/',(req,res) => {
    //sends post back
    //res.send(req.body);
    const newTask = {
        id: uuid.v4(),
        name: req.body.name,
        price: req.body.price
        
    }
    if(!newTask.price || !newTask.email) {
       return res.status(400).json({msg: `Include name`});
    }
    tasks.push(newTask);
    res.json(tasks);
});
*/

//UPDATE TASK
router.put('/:id', (req,res) => {
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
module.exports = router;