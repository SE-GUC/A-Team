const express = require('express');
const router = express.Router();
const moment = require('moment')
const Tasks = require('../../models/Task') //mongo
const Task = require('../../models/Task')
const uuid = require('uuid')
const joi = require('joi')
const mongoose = require('mongoose')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey

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

router.get('/allemails', async(req, res)=>{
    const allUsers=await User.find({}).exec()
    var allEmails = []
    for(var i=0;i<allUsers.length;i++){
        allEmails.push(allUsers[i].email)
    }
    return res.json(allEmails)
})
router.get('/alluserNames', async(req, res)=>{
    const allUsers=await User.find({}).exec()
    var allEmails = []
    for(var i=0;i<allUsers.length;i++){
        allEmails.push(allUsers[i].username)
    }
    return res.json(allEmails)
})
//add random task tester
router.get('/', async (req, res) => {
    try {
        const t = await Task.find()
        res.json({
            data: t
        })
    } catch (err) {
        res.data('Request Erorr')
    }
});
router.get('/get_my_tasks',checkToken, async (request, response) => {
  //member
         //verify the JWT token generated for the user
         jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            }else{
                const user = await User.findById(authorizedData.id).exec()
                    const allTasks = await user.tasks_applied_for
                    var result=[]
                    allTasks.forEach(task =>{
                      if (task.id == (request.params.id)){
                        result.push(task)
                      }
                    })
                    return response.json({ data: result });
                }
            })
                });
///////////////
router.get('/view_accepting', async (req, res) => {
    const task = await Tasks.find({status:"Accepting"});
    res.json({data:task});

});
router.get('/view_pending', async (req, res) => {
    const task = await Tasks.find({status:"Pending"});
    res.json({data:task});

});
router.get('/view_Approved', async (req, res) => {
    const task = await Tasks.find({status:"Approved"});
    res.json({data:task});

});
router.get('/view_assigned', async (req, res) => {
    const task = await Tasks.find({status:"Assigned"});
    res.json({data:task});

});
router.get('/view_closed', async (req, res) => {
    const task = await Tasks.find({status:"Closed"});
    res.json({data:task});

});
router.get('/view_finished', async (req, res) => {
    const task = await Tasks.find({status:"Finished"});
    res.json({data:task});

});
router.get('/view_applicants', async(req,res) => {
    const tasks= await Tasks.find()
    const a=[]
    const c=[]
    
    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i].applicants;
        
        c.push({name:tasks[i].name,applicants:element})
      
    }
    res.json({data:c});
    
});
router.get('/view_applicants/:id', async(req,res) => {
    const tasks= await Tasks.findById(req.params.id)
    const c=[]
    

        const element = tasks.applicants;
        
        c.push({element})
      
    
    res.json({data:c});
    
})

router.post('/add_task', async (req, res) => {
    const newTask = new Task({
        name: "new",
        time_of_post: new Date('01.02.2012'),
        time_of_review: new Date('01.02.2012'),
        monetary_compensation: 2000,
        price: 898989,
        time_of_assingment: new Date('01.02.2012'),
        is_assigned: false,
        //assigned_id: '',
        time_expected: "3 days",
        level_of_comitment: "High",
        is_reviewed: false,

        experience_needed: "6 yrs",
        description: "Be aware of the new kill leader",
        p_id: '',
        skills: ["Apex Legends"],
        response_from_admin: '',
        admin_id: mongoose.Types.ObjectId(),
        applicants: [ mongoose.Types.ObjectId(),mongoose.Types.ObjectId(), mongoose.Types.ObjectId()]
    })
    newTask
        .save()
        .then(task => res.json({
            data: task
        }))

})
router.get('/read/:id', async(req,res) => {
 
        const tsk = await Task.findById(req.params.id)
                  return res.json({ data: tsk });

});

//Youssef Shalaby
router.put('/addSkill',async(req,res)=>{ //Admin Access only
    var skills=Task.schema.path('skills').caster.enumValues
    console.log('Before: ',skills)
    skills.push(req.body.skill)
    console.log('After Pushing',skills)
    Task.schema.path('skills').caster.enumValues=skills
    Task.
    console.log('Updated Version',Task.schema.path('skills').caster.enumValues)
    return res.json({skills:Task.schema.path('skills').caster.enumValues})
})
router.post('/add',checkToken, async (req, res) => {
    //adding a task ith appropriate parenthesis
    try {
        jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
            if(err){
              //If error send Forbidden (403)
              console.log('ERROR: Could not connect to the protected route');
              response.sendStatus(403);
          } else {
            const status = joi.validate(req.body, {
                name: joi.string().max(40).required(),
                monetary_compensation: joi.number().required(),
                time_expected: joi.string().required(),
                level_of_comitment: joi.string().required(),
                experience_needed: joi.string().required(),
                description: joi.string().min(10).required(),
                skills: joi.array().items(joi.string()),
                admin_id: joi.string().length(24),
                assigned_id: joi.string().length(24),
                applicants: joi.array().items(joi.object().keys({
                    applicant_id: joi.string().length(24).required(),
                    is_accepted: joi.boolean()
                  }))
         
            })
            if (status.error) {
                return res.json({
                    error: status.error.details[0].message
                })
            }
            try {
                const new_task = await new Task({
                    _id: mongoose.Types.ObjectId(),
                    name: req.body.name,
                    time_of_post: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    time_of_review: '',
                    monetary_compensation: req.body.monetary_compensation,
                    price: req.body.price,
                    time_of_assingment: '',
                    status: 'Pending',
                    assigned_id: undefined,
                    time_expected: req.body.time_expected,
                    level_of_comitment: req.body.level_of_comitment,
                    experience_needed: req.body.experience_needed,
                    description: req.body.description,
                    partner_id: authorizedData.id,
                    skills: req.body.skills,
                    response_from_admin: [],
                    admin_id: req.body.admin_id, //for now
                    applicants: []
                }).save()
                return res.json({
                    data: new_task
                })
            } catch (err) {
                console.log(err.message)
                return res.json({
                    error: `Error, couldn't create a new Task with the following data`
                })
            }
          }
      })
        
      }
       catch (err) {
        return res.json({ error: `Error, couldn't create a new task with the following data` })
      }
})

router.post('/create', async (req, res) => {
    try {
        const {
            name,
            time_of_post,
            time_of_review,
            monetary_compensation,
            price,
            time_of_assingment,
            is_assigned,
            assigned_id,
            time_expected,
            level_of_comitment,
            is_reviewed,
            experience_needed,
            description,
            p_id,
            response_from_admin,
            admin_id,
            applicants
        } = req.body
        const new_task = new Task({
            name,
            time_of_post,
            time_of_review,
            monetary_compensation,
            price,
            time_of_assingment,
            is_assigned,
            assigned_id,
            time_expected,
            level_of_comitment,
            is_reviewed,
            experience_needed,
            description,
            p_id,
            response_from_admin,
            admin_id,
            applicants
        })
        new_task
            .save()
        res.json({
            msg: 'Task added',
            data: new_task
        })
    } catch (error) {
        res.data('Request Erorr')
        console.log("oops")
    }

})
//READ TASK MONGO
router.get('/read', async (req, res) => {
    try {
        const tasking = await Tasks.find()
        res.json({
            data: tasking
        })
    } catch (err) {
        res.data('Request Erorr')
    }
})
//Amr Story 1.7
router.get('/applicants/', async(req,res) => {
    try {
        const app = await Tasks.find({status:"Accepting"},{applicants:1})
        res.json ({
            data: app
        })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})
//UPDATE TASK MONGO
router.put('/update/:id', async (req, res) => {
    try {
        Tasks.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, (err, model) => {
            if (!err) {
                return res.json({
                    data: model
                })
            } else {
                return res.json({
                    error: `Can't find task`
                })
            }
        })
    } catch (err) {
        res.data('Request Erorr')
    }


})
//DELETE TASK MONGO
router.delete('/:id', async (req, res) => {
    try {
        const name = req.params.name
        const deletedTask = Tasks.findByIdAndDelete(req.params.id, (err, model) => {
            if (!err) {
                return res.json({
                    data: null
                })
            } else {
                return res.json({
                    error: 'Error, cant delete'
                })
            }
        })
        if (!deletedTask) return res.status(404).send({
            error: 'Task doesnt exist'
        })
        res.json({
            msg: `Task ${name} deleted`,
            data: deletedTask
        })
    } catch (err) {
        res.data("Request Error")
    }

})

//STORY 1.3, READ TASK'S DESC
router.get('/read_desc/:id', async (req, res) => {
    try {
        const t = await Tasks.findById(req.params.id)
        res.json({
            data: t.description
        })
    } catch (err) {
        res.data('Request Error')
    }
})

router.put('/update_admin_response/:id', async (req,res) => {
        Tasks.findByIdAndUpdate(
            {_id: req.params.id},
            { $push: {response_from_admin: req.body.response_from_admin}},
            
            {new:true}, (err,model) => {
                if(!err) {
                    return res.json({data:model})
                } else {
                    return res.json(err)
                }
            }
            
            
            )
    
})
//hena
router.post('remove_applicant/:id', checkToken, async (request, response) => {
    try {
        jwt.verify(request.token, tokenKey, async (err, authorizedData) => {

      const status = joi.validate(request.body, {
      //  user_id:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const Tasks = await Task.findByIdAndUpdate(request.params.id, { $pop: { applicants: authorizedData.id } }).exec()
      return response.json({ data: Tasks })
    })
 } catch (err) {
      return response.json({ error: `Error` })  
    }
  }); 





//NEW DISPLAY ON TASK ID
router.put('/update/:id', (req, res) => {
    //updating a Task with the given inputs
    try {
        const tasks = Task
        const found = tasks.some(tasks => tasks.id == req.params.id);
        const updateTask = req.body; //getting response_From_admin
        if (found) {
            tasks.forEach(tasks => {
                if (tasks.id === req.params.id) {
                    tasks.response_from_admin = updateTask.response_from_admin ? updateTask.response_from_admin : tasks.response_from_admin;
                    res.json({
                        msg: `Task updated`,
                        tasks
                    });
                }
            });
        } else {
            res.status(400).json({
                msg: `ID ${req.params.id} not found`
            });
        }
    } catch (err) {
        res.data('Request Error')
    }
});
//Aly Zamzamy
router.put('/review/:id', (req, res) => {
    //accepting a task upload via id
    try {
        let id = req.params.id;
        // check for req are valid

        Tasks.findOneAndUpdate({
            _id: id
        }, {
            is_reviewed: true
        }, function(err, result) {
            if (err) {

                res.status(500); // bad request is being sent
                res.json({
                    'error': ' internalServerErrorInReview '
                });;
            } else if (result == null) {
                res.status(404); // bad request is being sent
                res.json('Task Was not found');;
            } else {
                res.status(200);
                res.json('Task was found and reviewed')
            }

        });

    } catch (err) {
        res.data('Request Error')
    }
});
router.put('/revvv/:id', async (req, res) => {
    try {
        const task = await Tasks.findOne({
            id
        })
        if (!task) return res.status(404).send({
            error: 'Task does not exist'
        })

        task.is_reviewed = true;
        res.json({
            msg: 'Updated Task'
        })

    } catch (error) {
        console.log("cant update")
        res.json({
            msg: 'cant update'
        })
    }
})

//hena
router.put('/accept/:tid',checkToken, async(req, res) => {
//accepting task upload via task is and partner id

try {
    jwt.verify(req.token, tokenKey, async (err, authorizedData) => {

    const exists = await Task.findOne({ _id: req.params.tid });
    if (exists === null) {
      return res.json({ message: "Task id is invalid" });
    }
    console.log(exists);
    const prtid = exists.partner_id._id;
    const st = exists.status;
    if(prtid == authorizedData.id && st=='Approved'){

        Tasks.findByIdAndUpdate(req.params.tid, {
           
            status: "Accepting",
            
        }, {
            new: true
        }, (err, model) => {
            if (!err) {
                return res.json({
                    data: model
                })
            } else {
                return res.data({
                    error: `Can't acc task`
                })
            }
        });

      //exists.status="Accepting";
       return res.json({
            msg: `Task accepted`,
            Task
        });
    }
  
    else{
       return res.json({
            msg: `You are only allowed to update your own approved taks!`,
            
        });
    }
})
} catch (error) {
    console.log(error)
   // res.json({
        //msg: 'cant accept'
    //})
    }
    
});
router.put('/approve/:tid',checkToken, async(req, res) => {
    //accepting task upload via task is and partner id
    
    try {
        jwt.verify(req.token, tokenKey, async (err, authorizedData) => {
    
        const exists = await Task.findOne({ _id: req.params.tid });
        if (exists === null) {
          return res.json({ message: "Task id is invalid" });
        }
        console.log(exists);
        const prtid = exists.partner_id._id;
        const st = exists.status;
        if(prtid == authorizedData.id && st=='Pending'){
    
            Tasks.findByIdAndUpdate(req.params.tid, {
               
                status: "Approved",
                
            }, {
                new: true
            }, (err, model) => {
                if (!err) {
                    return res.json({
                        data: model
                    })
                } else {
                    return res.data({
                        error: `Can't acc task`
                    })
                }
            });
    
          //exists.status="Accepting";
           return res.json({
                msg: `Task accepted`,
                Task
            });
        }
      
        else{
           return res.json({
                msg: `You are only allowed to update your own approved taks!`,
                
            });
        }
    })
    } catch (error) {
        console.log(error)
       // res.json({
            //msg: 'cant accept'
        //})
        }
        
    });




//hena
//STORY 1.11  MEMBERS CAN VIEW TASKS THEY APPLIED ON
router.get('/viewapplied/:id',checkToken, async(req, res) => {

    try {
        jwt.verify(req.token, tokenKey, async (err, authorizedData) => {

        const exists = await User.findOne({ _id: authorizedData.id });
        if (exists === null) {
          return res.json({ message: "Please enter a valid member id" });
        }
        console.log(exists);

            const u = await User.findById(authorizedData.id )
            res.json({
                data: u.tasks_applied_for
            })
        
        })
}catch (error) {
    console.log(error)
  
    }
});







//Mohammed Islam
//getting a specfic task

router.get('/get/:id', async (req, res) => {
    const id = req.params.id
    try {
        const task = await Tasks.findOne({
            id
        })
        if (!task) return res.status(404).send({
            error: 'User does not exist'
        })
        else
            res.json({
                data: task
            })
    } catch (err) {
        res.data('Request Error')
    }
});
//hena
//assigning a request 
router.put('assign/:id', async (req, res) => {
    try {
        jwt.verify(request.token, tokenKey, async (err, authorizedData) => {
        Tasks.findByIdAndUpdate(req.params.id, {
            is_assigned: req.body.is_assigned,
            assigned_id: authorizedData.id
        }, {
            new: true
        }, (err, model) => {
            if (!err) {
                return res.json({
                    data: model
                })
            } else {
                return res.data({
                    error: `Can't find task`
                })
            }
        });
    })
    } catch (err) {
        res.data('Request Error')
    }


});

//hena :)
router.get('/recommend',checkToken, async (req, res) => {
    //Input: a skills array 
    //Output: Tasks that could be recommended to Member

    var status = joi.validate(req.body, {
        skills: joi.array().items(joi.string().max(20))
    })
    if (status.error) {
        return res.json({
            error: status.error.details[0].message
        })
    }
    status = joi.validate(req.params, {
        member_id: joi.string().length(24)
    })
    if (status.error) {
        return res.json({
            error: status.error.details[0].message
        })
    }
    try {
        jwt.verify(req.token, tokenKey, async (err, authorizedData) => {

        const found= await User.findById(authorizedData.id)
        if(!found){
            return res.json({error:"Member does not exist"})
        }

        var myskills = found.skills //5aleeh member skills
        console.log(myskills)
        var sorted = []
        for (var i = 0; i < myskills.length; i++) {
            sorted.push(myskills[i].toLowerCase());
        }
        myskills = myskills.sort()
        const filter = await Task.find({
            skills: myskills[0]
        })
        myskills = sorted.sort()
        const result = {
            data: []
        }
        var intersection = []
        for (var i = 0; i < filter.length; i++) {
            var sortedfltr = []
            var current = filter[i].skills
            for (var j = 0; j < current.length; j++) {
                sortedfltr.push(current[j].toLowerCase());
            }
            filter[i].skills = sortedfltr.sort();
            intersection = myskills.filter(value => filter[i].skills.includes(value))
            if (intersection.sort().toString().toLowerCase() === filter[i].skills.sort().toString().toLowerCase()) {
                result.data.push(filter[i])
            }
        }
        return res.json(result)
    })
    } catch (err) {
        res.json('Error While running')
    }

});

//hena 
router.get('/apply/:id',checkToken, async (req, res) => {
    const status = joi.validate(req.params, {
        id: joi.string().length(24).required(),
        member_id:joi.string().length(24).required()
    })
    if (status.error) {
            return res.json({
                error: status.error.details[0].message
            })
        
    }
    try {
        jwt.verify(req.token, tokenKey, async (err, authorizedData) => {

        const found= await User.findById(authorizedData.id)
        if(!found){
            return res.json({error:"Member does not exist"})
        }
        var skills=found.skills
        const content = await Tasks.findById(req.params.id)
        var myskills = skills.sort() 
        var required = content.skills.sort()
        var intersection = myskills.filter(value => required.includes(value)).sort()
        if (intersection.toString() == required.toString()) {
            return res.json({
                msg: 'You can apply on the task with id ' + req.params.id
            })
        } else {
            return res.json({
                msg: 'You can NOT apply on the task with id ' + req.params.id
            })
        }
    })
    } catch (err) {
        res.json('Request Error')
    }

});
//hena
router
  .route('/assignMember/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .put(checkToken, async (request, response) => {
    try {
        jwt.verify(request.token, tokenKey, async (err, authorizedData) => {
          if(err){
              //If error send Forbidden (403)
              console.log('ERROR: Could not connect to the protected route');
              response.sendStatus(403);
          } else {
            const task = await Tasks.findByIdAndUpdate(request.params.id, { assigned_id: authorizedData.id } ).exec()
            console.log('SUCCESS: Connected to protected route');
  
              return response.json({data: task
              });
          }
      })
      } catch (err) {
        return response.json({ error: `Error, couldn't find application for a event given the following data` })
      }
  });


module.exports = router