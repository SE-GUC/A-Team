const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const User = require('../../models/User')



// const users=[
//     {
//         id:1,
//         first_name:"Youssef",
//         middle_name:"Zaki",
//         last_name:"Shalaby",
//         dob:"23/09/1998",
//         email:"youshalaby@gmail.com",
//         password:"allezleblues",
//         phone: '01119455455' ,
//         country:"Egypt",
//         city:"cairo",
//         account_open_on:""
    
    
    
//     },
//     {
//         id:2,
//         first_name:"Mesut",
//         middle_name:"AMin",
//         last_name:"Ozil",
//         dob:"23/09/1990",
//         email:"ozil@gmail.com",
//         password:"iamjd",
//         phone: '02222345455' ,
//         country:"England",
//         city:"London",
//         account_open_on:""
    
//     },
//     {
//         id:3,
//         first_name:"Emily",
//         middle_name:"Olivia",
//         last_name:"Blunt",
//         dob:"23/02/1983",
//         email:"ms_blunt@gmail.com",
//         password:"holywood202",
//         phone: '9455667788' ,
//         country:"USA",
//         city:"New Jersey",
//         account_open_on:""
    
    
    
//     },
//     {
//         id:4,
//         first_name:"Tessa",
//         middle_name:"Lyn",
//         last_name:"Thompson",
//         dob:"03/10/1983",
//         email:"lifeline@gmail.com",
//         password:"blackpanther",
//         phone: '0104840022' ,
//         country:"USA",
//         city:"New York",
//         account_open_on:""
    
//     }
//     ]


//to get every User
router.get('/', (req, res) => {
    User.find().then(user=>res.send(user))
});


//to get a specific user
router.get('/:id', (req, res) => {
    User.findById({_id:req.params.id}).then(user=>res.send(user))
    });




//Create user
// router.post('/', (req, res) =>{
//     const newuser = {
//         id:uuid.v4(),
//         first_name:req.body.first_name,
//         middle_name:req.body.middle_name,
//         last_name:req.body.last_name,
//         dob:req.body.dob,
//         email:req.body.email,
//         password:req.body.password,
//         phone:req.body.phone,
//         country:req.body.country,
//         city:req.body.city     
//     }
//     if( !newuser.first_name || !newuser.middle_name || !newuser.dob || 
//         !newuser.password){

//             return res.status(400).json({msg: 'Please include the required data'});
//         }

//         users.push(newuser);
//         res.json(users);
// });

//register new user
router.post('/register', async (req,res) => {
    const { email, dob, name, password, phone, location, account_open_on }  = req.body
    const user = await User.findOne({email})
    if(user) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newUser = new User({
            name,
            email,
            password: hashedPassword ,
            dob,
            phone,
            location,
            account_open_on
        })
    newUser
    .save()
    .then(user => res.json({data: user}))
    .catch(err => res.json({error: 'Can not create user'}))
})


//Update user
// router.put('/:id', (req, res) => {
//     const found = users.some(user =>user.id === parseInt(req.params.id));
//     if(found){
//         const upduser = req.body;
//         users.forEach(user => {
//             if(user.id === parseInt(req.params.id)){
//                 user.first_name=upduser.first_name? upduser.first_name : user.first_name;
//                 user.middle_name=upduser.middle_name? upduser.middle_name : user.middle_name;
//                 user.last_name=upduser.last_name? upduser.last_name : user.last_name;
//                 user.dob=upduser.dob? upduser.dob : user.dob;
//                 user.email=upduser.email? upduser.email : user.email;
//                 user.password=upduser.password? upduser.password : user.password;
//                 user.phone=upduser.phone? upduser.phone : user.phone;
//                 user.country=upduser.country? upduser.country : user.country;
//                 user.city=upduser.city? upduser.city : user.city; 
        

//                  res.json({ msg:'user updated', user});
//             } 
//         });
//     } else {
//         res.status(400).json({msg:'user not found'});
//     }
// });


//update user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        User.findOne({_id:req.params.id}).then(user => res.send(user))
    })
});

//Delete user
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete({_id:req.params.id}).then(user => res.send(user))
});
//get specific user
router.get('/users/:id',async (req,res) => {
    const id = req.params.id
    const user = await users.findOne({id})
    if(!user) return res.status(404).send({error: 'User does not exist'})
    else
    res.json({data: user})
    });
module.exports=router
    
    
    
    
