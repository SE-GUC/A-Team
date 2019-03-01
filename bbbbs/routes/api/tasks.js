const express = require('express');
const routertaskInv = express.Router();
const taskInv = require('../../taskOrientation');

routertaskInv.get('/',(req,res) => {
    res.json(taskInv);
});
routertaskInv.post('/',(req,res) => {
    const newInv = {
        memID: req.body.memID,
        taskID: req.body.taskID
    }
    if(!newInv.memID || !newInv.taskID) {
        return res.status(400).json({msg: `fml`});
    }
    taskInv.push(newInv);
    res.json(taskInv);
});
module.exports = routertaskInv;
