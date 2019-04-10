const express = require("express");
const router = express.Router();
const moment = require("moment");
const joi = require("joi");
const mongoose = require("mongoose");
const Tasks = require("../../models/Task");
const Project = require("../../models/Project");
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const t = await Project.find();
    res.json({ data: t });
  } catch (err) {
    res.data("Request Erorr");
  }
});
router.post("/create", async (req, res) => {
  const status = joi.validate(req.body, {
    project_name: joi.string().max(40).required(),
    description: joi.string().min(10).required(),
    partner_responsible: joi.string().length(24),
    skills: joi.array().items(joi.string()),
    partner_responsible: joi.string().length(24) //Need to Handle That this id belongs to a partner
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
      consultancy_agency_assigned: undefined,
      skills: skills,
      consultancy_agency_applicants: [],
      tasks: []
    }).save();
    return res.json({ proj });
  } catch (err) {
    console.log(err.message);
    return res.json({
      error: `Request Error`
    });
  }
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
router
  .route("/applyProj/:id")
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi
        .string()
        .length(24)
        .required()
    });
    if (status.error) {
      return response.json({ error: status.error.details[0].message });
    }
    next();
  })
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        consultancy_agency_id: joi.string().length(24)
      });
      if (status.error) {
        return response.json({ error: status.error.details[0].message });
      }

      const project = await Project.findByIdAndUpdate(request.params.id, {
        $push: {
          consultancy_agency_applicants: request.body.consultancy_agency_id
        }
      }).exec();
      return response.json({ data: project });
    } catch (err) {
      return response.json({ error: `Error` });
    }
  });
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
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        consultancy_agency_id:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const project = await Project.findByIdAndUpdate(request.params.id, { $push: { consultancy_agency_applicants: request.body.consultancy_agency_id } }).exec()
      return response.json({ data: project })
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
  .post(async (request, response) => {
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
module.exports=router
