const express = require("express");
const router = express.Router();
const moment = require("moment");
const joi = require("joi");
const mongoose = require("mongoose");
const Tasks = require("../../models/Task");
const Project = require("../../models/Project");
const User = require("../../models/User");

const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];
    
  if(typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];
    
      req.token = token;
      next();
  } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
  }
}

router.get("/", async (req, res) => {
  try {
    const t = await Project.find();
    res.json({ data: t });
  } catch (err) {
    res.json("Request Erorr");
  }
});
router.get('/get_my_projects/:id',checkToken, async (request, response) => {
      //verify the JWT token generated for the user
      jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        }else{
            const user = await User.findById(authorizedData.id).exec()
      const allProjects = await user.past_projects
      var result=[]
      allProjects.forEach(project =>{
        if (project.id == (request.params.id)){
          result.push(project)
        }
      })
      return response.json({ data: result });
    }
  })
 
  });
router.post("/create", async (req, res) => {
  const status = joi.validate(req.body, {
    project_name: joi.string().max(40).required(),
    description: joi.string().min(10).required(),
    skills: joi.array().items(joi.string()),
    partner_responsible: joi.string().length(24), //Need to Handle That this id belongs to a partner
    tasks: joi.array().items(joi.string().length(24)),
    consultancy_agency_applicants: joi.array().items(joi.object().keys({
      consultancy_agency_id: joi.string().length(24).required(),
      is_accepted: joi.boolean()
    })),
    status:joi.string().min(10).allow()

})
if (status.error) {
    return res.json({
        error: status.error.details[0].message
    })
}
try {
  user = await User.findById(req.body.partner_responsible).exec()
  if (user === null) {
      return res.json({
          error: `The partner_id you entered does not belong to a user`
      })
  }
} catch (err) {
  return res.json({
      error: `Error, couldn't find a user given the following id`
  })
}
  const { project_name, description, partner_responsible, skills } = req.body;
  try {
    const proj = await new Project({
      project_name: project_name,
      description: description,
      date_Posted: moment().format("MMMM Do YYYY, h:mm:ss a"),
      partner_responsible: partner_responsible,
      skills: skills,
      consultancy_agency_applicants: [],
      consultancy_agency_assigned: undefined,
      tasks: [],
      status:'PENDING_APPROVAL'

    }).save();
    return res.json({ proj });
  } catch (err) {
    console.log(err.message);
    return res.json({
      error: `Request Error`
    });
  }
});

router.get('/read/:id', async(req,res) => {
   
  const tsk = await Project.findById(req.params.id)
  console.log(tsk)
  return res.json({ data: tsk });
        
  
});

router
  .route("/crud")
  .all(async (request, response, next) => {
    const status = joi.validate(request.body, {
      id: joi
        .string()
        .length(24)
        .required(),
      update: joi.allow()
    });
    if (status.error) {
      return response.json({ error: status.error.details[0].message });
    }
    next();
  })
  .get(async (request, response) => {
    try {
      const project = await Project.findById(request.body.id).exec();
      return response.json({ data: project });
    } catch (err) {
      return response.json({
        error: `Error, couldn't find a Project given the following id`
      });
    }
  })
  .put(async (request, response) => {
    //update by id
    Project.findByIdAndUpdate(
      request.body.id,
      request.body.update,
      { new: true },
      (err, model) => {
        if (!err) {
          return response.json({ updated: model });
        } else {
          return response.json({ error: "Could not Update" });
        }
      }
    );
  })
  .delete(async (request, response) => {
    //delete by id
    Project.findByIdAndDelete(request.body.id, (err, model) => {
      if (!err) {
        return response.json({
          message: "The Project Was Deleted Successfuly"
        });
      } else {
        return response.json({ message: "Deletion failed!" });
      }
    });
  });

router.put('/AddTask',async (req, res) => {
    try {
      const status = joi.validate(req.body, {
        project_id:joi.string().length(24).required(),
        task_id: joi.string().length(24).required()
      });
      if (status.error) {
        return res.json({ error: status.error.details[0].message });
      }
      const task_id=req.body.task_id
      const project_id=req.body.project_id
      try {
        task = await Task.findById(task_id).exec();
        if (task === null) {
          return res.json({
            error: `The task_id you entered does not belong to a user`
          });
        }
      } catch (err) {
        return res.json({
          error: `Error, couldn't find a user given the following id`
        });
      }
      //Checking if he Already Applied
      const checker= await Project.find({ _id:project_id,tasks: [task_id] })
      if(checker){
        return res.json({ error: "You Already Added This Task" });
      }

      const proj = await Project.findByIdAndUpdate(project_id, { $push: { tasks: task_id} }).exec()
      console.log(project_id)
      return res.json({ data: proj });
    } catch (err) {
      return res.json({ error: "Request Error" });
    }
  });

//(Consultancy Agency) I can Apply on a project
// router
//hena
   router
  .route('/applyProj/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .put(async (request, response) => {
    try {
      jwt.verify(request.token, tokenKey, async (err, authorizedData) => {

      const status = joi.validate(request.body, {
        consultancy_agency_id:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
    
      const project = await Project.findByIdAndUpdate(request.params.id, { $push: { consultancy_agency_applicants: authorizedData.id} }).exec()
      return response.json({ data: project })
    })
    } catch (err) {
      return response.json({ error: `Error` })  
    }
  });  
  router
  .route('/cancelApp/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .put(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        consultancy_agency_id:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const project = await Project.findByIdAndUpdate(request.params.id, { $pull: { consultancy_agency_applicants: request.body.consultancy_agency_id } }).exec()
      return response.json({ data: project })
    } catch (err) {
      return response.json({ error: `Error` })  
    }
  });

  //hena
  router
  .route('/assign_consultancy_agency/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .put(async (request, response) => {
    try {
      jwt.verify(request.token, tokenKey, async (err, authorizedData) => {

      const status = joi.validate(request.body, {
        consultancy_agency_id:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      const project = await Project.findByIdAndUpdate(request.params.id, { consultancy_agency_assigned: authorizedData.id } ).exec()
      return response.json({ data: project })
      })
    } catch (err) {
      return response.json({ error: `Error` })
    }
  }); 


 


 //ALY ZAMZAMY 13.13 filter projects based on status
 router.get("/getByStatus/:status", async (req, res) => {
  //joi validation
  const s = joi.validate(req.params, {
    status: joi.string().required()
  });
  if (s.error) {
    return response.json({ error: s.error.details[0].message });
  }

  //add ifs => if status is not in ENUM return message
 var list=['PENDING_APPROVAL','APPROVED','ACCEPTING_APPLICANTS','SOLD_OUT','FINISHED',"ALL"]
 const status=req.params.status
  if (!list.includes(status)) {
    return res.json({
      message: "The status you entered is not a valid status"
    });
  }
  try {
    //if condtion to make sure it is a valid status
    const criteria = req.params.status;
    const query = await Project.find({ status: criteria });

    return res.json({ data: query });
  } catch (e) {
    return res.json({ error: e });
  }
});




module.exports=router
