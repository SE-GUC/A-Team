const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Admin = require('../../models/Admin');

router
.get('/',async (request, response) => {
    try {
      const user = await Admin.find({})
      return response.json({ data: user })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a user given the following id` })
    }
  })

router.post('/createAdmin', async (req,res) => {
    const {  name, password, username, email }  = req.body
    const admin = await Admin.findOne({email})
    if(admin) return res.status(400).json({error: 'email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newAdmin = new Admin({ 
            name,
            password: hashedPassword ,
            email,
            username,
            type:['A']
        })
    newAdmin
    .save()
    .then(admin => res.json({data: admin}))
    .catch(err => res.json({error: err}))
}) 
module.exports =router
