const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require('../../models/User');
const axios = require('axios');

const x = "seifmohamedwael97@gmail.com";
var lastEmail = '';

// async function getUsers(ze) {
//   const m = await axios.get('https://ateamse2.herokuapp.com/api/users/')
//   .then(res => {
//     const ze = [];
//     for(let i = 0;i < res.data.length;i++) {
//     const x = String(res.data[i].email)
    
//     ze.push(x)

    
//     }
//     return "mangaaa";
//     console.log(ze)


//   })
// }
// console.log(getUsers(ze))

router.get("/send", async (req, res) => {
  const m = await axios.get('https://ateamse2.herokuapp.com/api/users/')
    .then(res => {
      lastEmail = res.data[res.data.length-1].email;
      console.log("I am inside axios")
    }) 
    console.log(lastEmail)

  let  transporter = nodemailer.createTransport({
    service:'gmail',
    secure:false,
    port:25,
    auth:{ 
      user: 'ateamseproj@gmail.com',
      pass: 'Qwer12345678'
  
    },
    tls:{
      rejectUnauthorized:false
    }
     
  
  });
  
  
  let HelperOptions = {  
    from:'"A-Team" <ateamseproj@gmail.com>',
    to: lastEmail,
    subject:'Test ',
    text:'You have been accepted ebset ya 3am  '
   };
  
  transporter.sendMail(HelperOptions,(error,info) => {
     if (error){
      return console.log(error);
     }
     console.log("The Message has been sent ");
     console.log(info);
     console.log(manga.email)
    });  

   
    res.json("Meesage Sent to Accepted Users") 
});

module.exports = router;
