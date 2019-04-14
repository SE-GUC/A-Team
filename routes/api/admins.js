const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Admin = require('../../models/Admin');


router.post('/createAdmin', async (req,res) => {
    const {  name, password, username }  = req.body
    const admin = await Admin.findOne({username})
    if(admin) return res.status(400).json({error: 'username already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newUser = new User({
            name,
            password: hashedPassword ,
            username,
        })
    newAdmin
    .save()
    .then(admin => res.json({data: admin}))
    .catch(err => res.json({error: 'Can not create admin'}))
}) 
module.exports =router
