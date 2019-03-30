const express = require('express')
const router = express.Router()

const Task =require( '../../models/Task');

const tasks=[
    new Task('1', "21/02/2019 8:15 PM","",'5678','20000',"",false,'',"3 weeks","High",false,'3',"I need someone to Apply unit tests on my code",'4',["Java","programming"],"", '1') ,
    new Task('2', "21/02/2019 7:15 PM","",'568','200',"",false,'',"3 days","Low",false,'3',"I need someone to Apply unit tests on my code",'4',["Chinese","English","Translation"],"", '1')  

];

router.get('/', (req, res) => res.json({ data: tasks }))

module.exports=router;