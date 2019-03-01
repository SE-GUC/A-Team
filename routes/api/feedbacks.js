
const express = require('express');
const router = express.Router();
const uuid=require('uuid')


const feedbacks=[
    {
        id:1,
        event_id:1,
        partner_id:3,
        member_id:2,
        description:'it was superb'
    },
    {
        id:1,
        event_id:1,
        partner_id:3,
        member_id:2,
        feedback_description:'I loved it'
    }
]

//to get every Feedback
router.get('/', (req, res) => {
    res.json(feedbacks);
});

//to get a specific Feedback
router.get('/:id', (req, res) => {
        const found = feedbacks.some(member =>member.id === parseInt(req.params.id));
        if(found){
            res.json(feedbacks.filter(feedback => feedback.id===parseInt(req.params.id)));
        } else {
            res.status(400).json({msg:'Feedback not found'});
        }
    });

//Create Feedback
router.post('/', (req, res) =>{
    const newFeedback = {
        event_id: uuid.v4(),
        partner_id: req.body.partner_id,
        member_id: req.body.member_id,
        description: req.body.description
    }
    if( !newFeedback.event_id || !newFeedback.partner_id || !newFeedback.member_id || 
        !newFeedback.description){

            return res.status(400).json({msg: 'Please include the required data'});
        }

        feedbacks.push(newFeedback);
        res.json(feedbacks);
});

//Update Feedback
router.put('/:id', (req, res) => {
    const found = feedbacks.some(feedback =>feedback.id === parseInt(req.params.id));
    if(found){
        const updFeedback = req.body;
        feedbacks.forEach(feedback => {
            if(feedback.id === parseInt(req.params.id)){
                feedback.event_id= updFeedback.event_id? updFeedback.event_id : feedback.event_id;
                feedback.partner_id= updFeedback.partner_id? updFeedback.partner_id : feedback.partner_id;
                feedback.member_id= updFeedback.member_id? updFeedback.member_id: feedback.member_id;
                feedback.description= updFeedback.description?updFeedback.description : feedback.description;

                 res.json({ msg:'Feedback updated', feedback});
            } 
        });
    } else {
        res.status(400).json({msg:'Feedback not found'});
    }
});

//Delete Feedback
router.delete('/:id', (req, res) => {
    const found = feedbacks.some(member =>member.id === parseInt(req.params.id));
    if(found){
        res.json({msg: 'Member deleted', feedbacks : feedbacks.filter(feedback => feedback.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg:'Feedback not found'});
    }
});


    module.exports = router;