const express = require('express');
const router= express.Router();
const eventrequest= require('../../models/EventRequests')

    // var eventrequest=[
    //     {
    //         id: 1,
    //         organizer: "",
    //         isAccepted: "False"
    //     },{
    //         id: 2,
    //         organizer: "",
    //         isAccepted: "False"
    //     },{
    //         id: 3,
    //         organizer: "",
    //         isAccepted: "False"
    //     }
    // ]

    router.get('/geteventrequest',(req,res) =>
    {
        res.send(eventrequest)
    })
    
    router.post('/addrequest',(req,res)=>
    {
        const organnizer= req.body.organizer
               
        
        const event1={
            id:eventrequest.length +1 ,
            organizer:organnizer,
            isAccepted:"False"
        }
        eventrequest.push(event1)
        res.send(eventrequest)
    })



    router.delete('/deleterequest/:id', (req,res) =>
    {
        const found= eventrequest.some(event =>event.id===parseInt(req.params.id));
        if (found){
            res.json({msg:'Event deleted', 
            eventrequest : eventrequest.filter(event=>event.id!==parseInt(req.params.id))});
        }
        else{
            res.status(400).json({msg: 'No eventrequests with this id'})  
        }
    }
    )

    router.put('/update/:id',(req,res) =>
    {
        const p_id= req.params.id
        const updateis= req.body.isAccepted
        const eventreq= eventrequest.find(eventreq => eventreq.id===p_id)
        eventreq.isAccepted= updateis
        res.send(eventrequest)
    })
    
module.exports=router
    
    
    
    