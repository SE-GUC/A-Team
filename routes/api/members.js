const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const Member = require('../../models/Member')






//to get every Member
router.get('/', (req, res) => {
  
    Member.find().then(member=>res.send(member))
});



//register a new member
router.post('/register', async (req,res) => {
    const { years_of_experience, skills, interests, }  = req.body
    //const member = await Member.findOne({email})
    //if(member) return res.status(400).json({error: 'Email already exists'})
    
    
    const newMember = new Member({
            years_of_experience,
            skills,
            interests,
        })
    newMember
    .save()
    .then(member => res.json({data: member}))
    .catch(err => res.json({error: 'Can not create a member'}))
})

router
  .route('/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .get(async (request, response) => {
    try {
      const member = await Member.findById(request.params.id).exec()
      return response.json({ data: member })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a member given the following id` })
    }
  })
  .put(async (request, response) => {
    Member.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a member given the following data` })
      }
    })
  })
  .delete((request, response) => {
    Member.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a member given the following data` })
      }
    })
  })


module.exports=router
    
    
    
    
