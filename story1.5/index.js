// Import express
const express = require('express');
const path = require('path');
const app = express();

const taskOrientation = require('./taskOrientation');


//ROUTING FROM TASKS
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/Orient',require('./routes/api/tasks'));
app.use('/api/Notifs',require('./routes/api/notifs'));





/* app.post('/Notifs',(req,res) => {
    const newNotif = {
        memID: req.body.memID,
        taskID: req.body.taskID
    }
    if(!newNotif.memID || !newNotif.taskID) {
        return res.status(400).json({msg: `Bye`});
    }
    notif.push(newNotif);
    res.json(notif);
});
*/

const PORT= process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Use it with post
app.use(express.json())

