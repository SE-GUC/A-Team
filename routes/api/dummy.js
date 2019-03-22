const express= require('express');
const router= express.Router();
const moment= require('moment')
const Dummy = require('../../models/Dummy')

router.post('/',(req,res)=>{
    const name= req.body.name
    const person = new Dummy({name:name})
    person
    .save()
    .then(person => res.json({data: person}))

});
module.exports=router