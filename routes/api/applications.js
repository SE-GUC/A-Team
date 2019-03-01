const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


//const Application = require('../../models/Application')
// Models
const applications=[ 
    {
        id:1,
        event_id:1,
        partner_id:3,
        member_id:2,
        
    
    },
    {
        id:2,
        event_id:1,
        partner_id:3,
        member_id:2,
       
        
    }
]

//GET an application from a user
router.get('/',(req,res)=> res.json({ data: applications }));


// Create a new application by user for a specific event
router.post('/addapplication', (req, res) => {
    const id=uuid.v4();
    const member_id = req.body.member_id;
    const partner_id=req.body.partner_id;
    const event_id = req.body.event_id;
    

	if (!member_id) return res.status(400).send({ err: 'Member not Found' });
    if (!partner_id) return res.status(400).send({ err: 'Member not Found' });
	if (!event_id) return res.status(400).send({ err: 'Event id is required' });
	//if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid Event id' });

	const apply = {
        id,
        member_id,
        partner_id,
        event_id,
        id: uuid.v4(),
    };
    applications.push(apply)
    res.send(applications)
});

//delete
router.delete('/delete/:id',(req,res)=> {
    const found= applications.some(application=>application.id===parseInt(req.params.id))
    if (found){
        res.json({msg:'Application deleted', 
        applications : applications.filter(application=>application.id!==parseInt(req.params.id))});
    }
    else{
      res.status(400).json({msg: 'This application is not found'})  
    }

});
//update
router.put('/update/:id',(req,res)=> {
    const found= applications.some(application =>application.id===parseInt(req.params.id));
    if (found){
        const updatedApp=req.body;
        applications.forEach(application =>{
            if (application.id===parseInt(req.params.id))
            {
                application.member=updatedApp.member?updatedApp.member:application.member;
                application.partner=updatedApp.partner?updatedApp.partner:application.partner;
                application.event=updatedApp.event?updatedApp.event:application.event;
                 
                res.json({msg: 'Application updated', application});
            }
        })
    }
    else{
      res.status(400).json({msg: 'Not change in application'})  
    }

});

module.exports = router;


