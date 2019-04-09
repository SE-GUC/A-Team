const express = require('express')
const router = express.Router()
const Partner=require('../../models/Partner')
const joi = require('joi')
const mongoose = require('mongoose') 

//get all partners
router.get('/', async (req,res) => {
    Partner.find().then(partner=>res.send(partner))
});

//register a new partner
router.post('/register', async (req,res) => {
    const  {consultancy_agency_id,  field_of_work, past_projects, board_members,events, feedback}  = req.body

    const newPartner = new Partner({
        consultancy_agency_id,
        field_of_work,
        past_projects:[],
        board_members:[],
        events:[],
        feedback:[]

        })
    newPartner
    .save()
    .then(partner => res.json({data: partner}))
    .catch(err => res.json({error: 'Can not create a partner'}))
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
      const partner = await Partner.findById(request.params.id).exec()
      return response.json({ data: partner })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a user given the following id` })
    }
  })
  .put(async (request, response) => {
    Partner.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a user given the following data` })
      }
    })
  })
  .delete((request, response) => {
    Partner.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a user given the following data` })
      }
    })
  })


// // read a single partner 
// router.get('/:id', (req,res) => {
    
//     const found = partners.some(partner => partner.id ===req.params.id);
//     if(found) {
//         res.json(partners.filter(partner => partner.id ===req.params.id));
//     } else {
//         res.status(400).json({msg: `id ${req.params.id} not found`});
//     }
// });

// // Create a new partner 
// router.post('/addpartner', (req, res) => {
   
// 	const newpartner = {
//         consultancy_agency_id: mongoose.Types.objectID(),
//     };
//     partners.push(newpartner)
//     res.send(partners)
// });



// //updating a partner
// router.put('/update/:id',(req,res)=> {
//     const found = partners.some(partner => partner.id ===req.params.id);
//     if (found){
//         const updatedPartner=req.body;
//         partners.forEach(partner =>{
//             if (partner.id===parseInt(req.params.id))
//             {
//               partner.member=updatedPartner.consultancy_agency_id?updatedPartner.consultancy_agency_id:partner.consultancy_agency_id;

//               res.json({msg: 'Partner updated', partner});
//             }
//         })
//     }
//     else{
//       res.status(400).json({msg: 'Not change in partner'})  
//     }

// });



// //deleting a partner:
// router.delete('/delete/:id',(req,res)=> {
//     const found = partners.some(partner => partner.id ===req.params.id);
//     if (found){
//         res.json({msg:'partner deleted', 
//         Partner : partners.filter(partner=>partner.id!==parseInt(req.params.id))});
//     }
//     else{
//       res.status(400).json({msg: 'This partner is not found'})  
//     }

// });

module.exports = router;