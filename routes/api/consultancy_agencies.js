const express = require('express')
const router = express.Router()
const ConsultancyAgency = require('../../models/ConsultancyAgency')
const moment= require('moment')
const Tasks= require('../../models/Task')
const joi= require('joi')
//asd
//Amr's CRUD for conssult. agency
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


router
  .route('/view_agency/:id')
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
      const consultancy_agency = await ConsultancyAgency.findById(request.params.id)
//      console.log(consultancy_agency)
      return response.json({ data: consultancy_agency })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })
router.get('/view_applicants', async(req,res) => {
    const tasks= await Tasks.find()
    const a=[]
    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i].applicants;
        a.push(element)
    }
    res.json({data: a})
})
/////decide to assign applicant
  router.put('/:id',async (req,res) => {
                Tasks.findByIdAndUpdate(req.params.id,{is_assigned:req.body.is_assigned,assigned_id:req.body.assigned_id}, {new: true}, (err, model) => {
                    if(!err) {
                        return res.json({data:model})
                    } else {
                        return res.data({error: `Can't find task`})
                    }
                } )
            })



module.exports=router
