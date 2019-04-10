const express = require('express');
const Joi = require('joi');
//const uuid = require('uuid');
const router = express.Router();
const Location = require('../../models/Location')
// get all
router.get('/', async (req,res) => {
  const locations = await Location.find()
  res.json({data: locations})
})

// get single
router.route('/:title').get(async (request, response) => {
  try {
    const locations = await Location.find({title:request.params.title}).exec()
    return response.json({ data: locations })
  } catch (err) {
    return response.json({ error:" Error, couldn't find a event given the following title" })
  }
})

//create location  

router.post('/', async (req,res) => {
  const { title, subtitle, location, capacity, booked }  = req.body
  const locations = await Location.findOne({title}).findOne({subtitle}) 
  
  if (locations ) return res.status(400).json({error: 'Location already exists'})
  const newLOC = new Location({
    title,
    subtitle,
    location,
    capacity,
    booked        })
  newLOC
  .save()
  .then(locations => res.json({data: locations}))
  .catch(err => res.json({error: 'Can not create Location'}))
}) 


// delete location 
router.route('/:id').delete(async (request, response) => {
  try {
    const locations = await Location.findByIdAndDelete(request.params.id).exec()
    
    return response.json({ data: locations })
  } catch (err) {
    return response.json({ error: "cannot delete " })
  }
})



// router.put('/:title', async(req,res) => {
//   try {
//       const title = req.params.title
//       const locations = await Location.findOne({title})
//       if(!locations) return res.status(404).send({error: 'Location does not exist'})
//       const updatedlocations = await Location.updateOne(req.body)
//       res.json({msg:`Updated Task ${title}`,data: updatedlocations})
//   } catch(error) {
//       console.log("cant update")
//       res.json({msg: 'cant update'})
//   }
// })

router.put('/:id', async(req,res) => { 
  try{
  Location.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, model) => {
    if(!err) {
      return res.json({data:model})
    } else {
      return res.data({error: `Location not found`})
    }
  })
}
catch(e){
  return res.data({error: `Request Error`})
}
})
 


module.exports=router