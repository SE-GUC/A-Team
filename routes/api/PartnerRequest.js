const express = require('express');
const router= express.Router();
const eventrequest= require('../../models/EventRequests')
const mongoose = require('mongoose')

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

    router.get('/geteventrequest', async (req,res) =>{
        const e= await eventrequest.find()

        res.json({data: e})
    })
    
    
    // router.post('/testadd',(req,res)=>
    // {
    //    const neweventrequest= new eventrequest({
    //        _id:eventrequest.length+1,
    //        organizer:"organizer",
    //        isAccepted: false
    //    })
       
    // })
    router.post('/testa', async (req,res) => {
        const organizer   = req.body.organizer
        const isAccepted= false
        //const user = await User.findOne({email})
        //if(user) return res.status(400).json({error: 'Email already exists'})
        
        //const salt = bcrypt.genSaltSync(10)
        //const hashedPassword = bcrypt.hashSync(password,salt)
        const neweventrequest = new eventrequest({
                organizer,
                isAccepted
            })
        neweventrequest
        .save()
        .then(e => res.json({data: e}))
        .catch(err => res.json({error: err.message}))
    })

    // router.post('/test', async (req,res) => {
    //     const organizer   = req.body.organizer
    //     const id= req.body.id
    //     const isAccepted= false
    //     //const user = await User.findOne({email})
    //     //if(user) return res.status(400).json({error: 'Email already exists'})
        
    //     //const salt = bcrypt.genSaltSync(10)
    //     //const hashedPassword = bcrypt.hashSync(password,salt)
    //     const neweventrequest = new eventrequest({
    //             organizer:"",
    //             isAccepted
    //         })
    //     neweventrequest
    //     .save()
    //     .then(e => res.json({data: e}))
    //     .catch(err => res.json({error: 'Can not create request'}))
    // })

    // router.post('/addrequest',(req,res)=>
    // {
    //     const organizer= req.body.organnizer
    //    const neweventrequest= new eventrequest({
    //        _id:eventrequest.length+1,
    //        organizer:organizer,
    //        isAccepted: false
    //    })
    //    neweventrequest.save().then(eventreq => res.json({eventrequest: eventreq}))
    // })



    // router.delete('/deleterequest/:id', (req,res) =>
    // {
    //     const found= eventrequest.some(event =>event.id===parseInt(req.params.id));
    //     if (found){/
    //         res.json({msg:'Event deleted', 
    //         eventrequest : eventrequest.filter(event=>event.id!==parseInt(req.params.id))});
    //     }
    //     else{
    //         res.status(400).json({msg: 'No eventrequests with this id'})  
    //     }
    // }
    // )
    router.delete('/deleterequest/:id', (req,res) =>
    {
        eventrequest.findByIdAndDelete(req.params.id,(err,e)=>{
            if(err){
                res.json(error, `can't delete` )
            }else{
                return res.json({ data: null })
            }
        })
    })
    router.put('/update/:id',(req,res) =>{
        eventrequest.findByIdAndUpdate(req.params.id,req.body,{new : true}, (err,e)=>{
            if(err){
                return res.json({ error: `cannot update this request` })
            }else{
                return res.json({data:e})
            }
        })
    })
    // router.put('/update/:id',(req,res) =>
    // {
    //     const p_id= req.params.id
    //     const updateis= req.body.isAccepted
    //     const eventreq= eventrequest.find(eventreq => eventreq.id===p_id)
    //     eventreq.isAccepted= updateis
    //     res.send(eventrequest)
    // })
    
module.exports=router
    
    
    
    