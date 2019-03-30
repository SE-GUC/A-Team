const express = require('express')
const router = express.Router()
const Partner=require('../../models/Partner')
const joi = require('joi')
const mongoose = require('mongoose') 

router.get('/read', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})

// read a single partner 
router.get('/:id', (req,res) => {
    
    const found = partners.some(partner => partner.id ===req.params.id);
    if(found) {
        res.json(partners.filter(partner => partner.id ===req.params.id));
    } else {
        res.status(400).json({msg: `id ${req.params.id} not found`});
    }
});

// Create a new partner 
router.post('/addpartner', (req, res) => {
   
	const newpartner = {
        consultancy_agency_id: mongoose.Types.objectID(),
    };
    partners.push(newpartner)
    res.send(partners)
});



//updating a partner
router.put('/update/:id',(req,res)=> {
    const found = partners.some(partner => partner.id ===req.params.id);
    if (found){
        const updatedPartner=req.body;
        partners.forEach(partner =>{
            if (partner.id===parseInt(req.params.id))
            {
              partner.member=updatedPartner.consultancy_agency_id?updatedPartner.consultancy_agency_id:partner.consultancy_agency_id;

              res.json({msg: 'Partner updated', partner});
            }
        })
    }
    else{
      res.status(400).json({msg: 'Not change in partner'})  
    }

});



//deleting a partner:
router.delete('/delete/:id',(req,res)=> {
    const found = partners.some(partner => partner.id ===req.params.id);
    if (found){
        res.json({msg:'partner deleted', 
        Partner : partners.filter(partner=>partner.id!==parseInt(req.params.id))});
    }
    else{
      res.status(400).json({msg: 'This partner is not found'})  
    }

});

module.exports = router;



