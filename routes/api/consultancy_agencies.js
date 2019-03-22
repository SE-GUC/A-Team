const express = require('express')
const router = express.Router()
const ConsultancyAgency = require('../../models/ConsultancyAgency')
const moment= require('moment')



router.post('/', async(req,res) => {
    try {
        
        const {info,field_of_work,board_members,reports} = req.body
        const new_agency = new ConsultancyAgency({
            info,
            field_of_work,
            board_members,
            reports
        })
        new_agency
        .save()
        res.json({msg:'Added Consultancy Agency', data:new_agency})
    } catch(error) {
        console.log("oops")
    }
})

router.put('/:id', async(req,res) => {
    ConsultancyAgency.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, model) => {
        if(!err) {
            return res.json({data:model})
        } else {
            return res.data({error:'Cant find Agency'})
        }
    })
})

router.delete('/:id', async(req,res) => {
    ConsultancyAgency.findByIdAndDelete(req.params.id, (err,model) => {
        if(!err) {
            return res.json({data:null})
        } else {
            return res.json({error:'Cant delete Agency'})
        }
    })
})

router.get('/view_agencies', async(req,res) => {
    const agent = await ConsultancyAgency.find()
    res.json({data:agent})
})

module.exports=router
