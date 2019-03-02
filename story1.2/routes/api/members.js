const express= require('express');
const router= express.Router();
const moment= require('moment')

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






router.put('/:id', (req,res)=>{

    const found = Task.some(task => task.id === (req.params.id));
    
    if(found===true){
        
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


module.exports = router;