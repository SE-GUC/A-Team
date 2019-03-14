const express= require('express');
const router= express.Router();
const moment= require('moment')

const users=[
    {
        id:'1',
        first_name:"Youssef",
        middle_name:"Zaki",
        last_name:"Shalaby",
        dob:"23/09/1998",
        email:"youshalaby@gmail.com",
        password:"allezleblues",
        phone: '01119455455' ,
        country:"Egypt",
        city:"cairo",
        account_open_on:""



    },
    {
        id:'2',
        first_name:"Mesut",
        middle_name:"AMin",
        last_name:"Ozil",
        dob:"23/09/1990",
        email:"ozil@gmail.com",
        password:"iamjd",
        phone: '02222345455' ,
        country:"England",
        city:"London",
        account_open_on:""



    },
    {
        id:'3',
        first_name:"Emily",
        middle_name:"Olivia",
        last_name:"Blunt",
        dob:"23/02/1983",
        email:"ms_blunt@gmail.com",
        password:"holywood202",
        phone: '9455667788' ,
        country:"USA",
        city:"New Jersey",
        account_open_on:""



    },
    {
        id:'4',
        first_name:"Tessa",
        middle_name:"Lyn",
        last_name:"Thompson",
        dob:"03/10/1983",
        email:"lifeline@gmail.com",
        password:"blackpanther",
        phone: '0104840022' ,
        country:"USA",
        city:"New York",
        account_open_on:""



    }

    ]
const taskOrientation = [
    {
        memID: '2',
        taskID: '1'
    },
    {
        memID: '3',
        taskID: '2'
    }
];
const notif = [
    {
        memID: "2",
        taskID: "1"
    },
    {
        memID: "3",
        taskID: "2"
    }
];
const Task=[
        {
            id:'1', 
            time_of_post:"21/02/2019 8:15 PM",
            time_of_review:"",
            monetary_compensation:'5678',
            price:'20000',
            time_of_assingment:"",
            is_assigned:false,
            assigned_id:'',
            time_expected:"3 weeks",
            level_of_comitment:"High",
            is_reviewed: false,
            experience_needed:'3',
            description:"I need someone to Apply unit tests on my code",
            p_id:'4',
            skills:["Java","programming"],
            response_from_admin:"",
            admin_id:'1'
    
        },
        {
            id:'2',
            time_of_post:"21/02/2019 7:15 PM",
            time_of_review:"",
            monetary_compensation:'58',
            price:'200',
            time_of_assingment:"",
            is_assigned:false,
            assigned_id:'',
            time_expected:"3 days",
            level_of_comitment:"low",
            is_reviewed: false,
            experience_needed:'2',
            description:"Translation from Chinese to English Needed",
            p_id:'4',
            skills:["Chinese","English","Translation"],
            response_from_admin:"",
            admin_id:'1'
    
        }
    
    ];    
const event=[
        {
            id:'4',
            remaining_places:'12',
            organizer:"Mohammed Mahrous",
            location:"Mall of arabia hall 2, 6 october city, cairo, Egypt",
            about:"event that helps ict startups",
            price:'60',
            speakers:["Elon Musk","Hassan Soubra"],
            topics:["technology","Java","Programming"],
            attendees_ids:['1','2']
    
    
        }
    
    ]
    
//Show All Tasks/

//Youssef Shalaby
router.get('/',(req,res)=> res.json(Task)) //show all tasks

router.post('/add',(req,res)=>{
    //adding a task ith appropriate parenthesis
const monetary_compensation=req.body.monetary_compensation
const p_id=req.body.p_id //Partner's ID
const price=req.body.price
const time_expected= req.body.time_expected
const level_of_comitment= req.body.level_of_comitment
const experience_needed= req.body.experience_needed
const description= req.body.description
const skills= req.body.skills

const task={
    id: Task.length+1,
    time_of_post:moment().format("DD/MM/YYYY h:mm:ss a"),
    time_of_review: "",
    monetary_compensation:monetary_compensation,
    price:price,
    time_of_assingment:"",
    is_assigned:false,
    assigned_id:'',
    time_expected:time_expected,
    level_of_comitment:level_of_comitment,
    is_reviewed: false,
    experience_needed:experience_needed,
    description:description,
    p_id: p_id,
    skills:skills,
    response_from_admin:"",
    admin_id:'1' //Assume it is assigned for youssef the admin
}
    Task.push(task)
    res.send(Task);

})
router.put('/edit/:id', (req, res) => {
    //editing a task with nullifying
    const time_of_post=req.body.time_of_post
    const time_of_review=req.body.time_of_review
    const monetary_compensation=req.body.monetary_compensation
    const price=req.body.price
    const time_of_assingment=req.body.time_of_assingment
    const is_assigned=req.body.is_assigned
    const assigned_id=req.body.assigned_id
    const time_expected=req.body.time_expected
    const level_of_comitment=req.body.level_of_comitment
    const is_reviewed=req.body.is_reviewed
    const experience_needed=req.body.experience_needed
    const description=req.body.description
    const p_id=req.body.p_id
    const skills=req.body.skills
    const response_from_admin= req.body.response_from_admin
    const admin_id=req.body.admin_id
    const task_id= req.params.id

//add updates
    const edit = Task.find(edit => edit.id === task_id)
    if(edit){
    edit.time_of_post=time_of_post
    edit.time_of_review=time_of_review
    edit.monetary_compensation=monetary_compensation
    edit.price=price
    edit.time_of_assingment=time_of_assingment
    edit.is_assigned=is_assigned
    edit.assigned_id=assigned_id
    edit.time_expected=time_expected
    edit.level_of_comitment=level_of_comitment
    edit.is_reviewed=is_reviewed
    edit.experience_needed=experience_needed
    edit.description=description
    edit.p_id=p_id
    edit.skills=skills
    edit.response_from_admin=response_from_admin
    edit.admin_id=admin_id
    res.send(Task)
    }
    else{
        res.status(500).json({msg:'Member not found'})
    }
    
})
router.delete('/remove/:id',(req,res)=>{
    //removing a task
    const task_id = req.params.id 
    const task = Task.find(task => task.id === task_id)
    const index = Task.indexOf(task)
    Task.splice(index,1)
    res.send(Task)
});
//Farah Abdelsalam
router.post('/inv',(req,res) => {
    //posting an invite
    const newInv = {
        memID: req.body.memID,
        taskID: req.body.taskID
    }
    if(!newInv.memID || !newInv.taskID) {
        return res.status(400).json({msg: 'Error Occured'});
    }
    taskOrientation.push(newInv);
    res.json(taskOrientation);
});
router.get('/inv',(req,res) => {
    //getting an invite
    res.json(taskOrientation);
});
router.post('/notif',(req,res) => {
    //posting a notfication
    const newNotif = {
        memID: req.body.memID,
        taskID: req.body.taskID
    }
    if(!newNotif.memID || !newNotif.taskID) {
        return res.status(400).json({msg: `Erorr`});
    }
    notif.push(newNotif);
    res.json(notif);
});
router.get('/notif',(req,res) => {
    //showing a notification
    res.json(notif);
});
//Amr 'Manga' Nashaat
router.get('/get/:id', (req,res) => {
    //Getting a task via id
    const tasks=Task
    const found = tasks.some(tasks => tasks.id == req.params.id);
    if(found) {
        res.json(tasks.filter(tasks => tasks.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
router.put('/update/:id', (req,res) => {
    //updating a Task with the given inputs
    const tasks=Task
    const found = tasks.some(tasks => tasks.id == req.params.id);
    const updateTask = req.body; //getting response_From_admin
    if(found) {
        tasks.forEach(tasks => {
            if(tasks.id === req.params.id) {
                tasks.response_from_admin = updateTask.response_from_admin ? updateTask.response_from_admin : tasks.response_from_admin;
                res.json({msg: `Task updated`, tasks});
            }
        });
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
//Aly Zamzamy
router.put('/review/:id', (req,res)=>{
    //accepting a task upload via id
    const found = Task.some(task => task.id === (req.params.id));

    if(found){

        Task.forEach(t => {
            if(t.id === (req.params.id)){
            t.is_reviewed = true ;
            res.json({msg: 'task updated', Task});
        }
        });
        }
    else{
      res.status(400).json({msg : 'no member with the id ${req.params.id} '} ) ;

    }


        });
//Mohammed Islam
router.get('/users/:id', (req,res) => {
    //getting a user with his id
    const found = users.some(users => users.id == req.params.id);
    if(found) {
        res.json(users.filter(users => users.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
router.get('/Tasks/:id', (req,res) => {
    //getting a specfic task
    const found = Task.some(tasks => tasks.id == req.params.id);
    if(found) {
        res.json(Task.filter(tasks => tasks.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});
router.put('/:id', (req,res) => {
    //assigning a request to a member
    const found = Task.some(task => task.id === req.params.id);
    const updateTask = req.body; 
    if(found) {
        Task.forEach(task => {
            if(task.id === req.params.id) {
                task.is_assigned = updateTask.is_assigned ? updateTask.is_assigned : task.is_assigned;
                task.assigned_id = updateTask.assigned_id ? updateTask.assigned_id : task.assigned_id;
                res.json({msg: `Task updated`, Task});
            }
        });
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});

module.exports=router