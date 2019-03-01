const express = require('express');
const routerNotifs = express.Router();
const notif = require('../../notif');

routerNotifs.get('/',(req,res) => {
    res.json(notif);
});
routerNotifs.post('/',(req,res) => {
    const newNotif = {
        memID: req.body.memID,
        taskID: req.body.taskID
    }
    if(!newNotif.memID || !newNotif.taskID) {
        return res.status(400).json({msg: `fml`});
    }
    notif.push(newNotif);
    res.json(notif);
});
module.exports = routerNotifs;
