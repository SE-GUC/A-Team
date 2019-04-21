const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");



router.get("/send", async (req, res) => {
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
    to: 'Seifmohamedwael97@gmail.com',
    subject:'Test ',
    text:'You have been accepted ebset ya 3am  '
   };
  
  transporter.sendMail(HelperOptions,(error,info) => {
     if (error){
      return console.log(error);
     }
     console.log("The Message has been sent ");
     console.log(info);
    });  

   
    res.json("Meesage Sent to Accepted Users") 
});

module.exports = router;
