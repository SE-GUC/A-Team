const express = require('express');
const path = require('path');
const router = express.Router();
const users = require('../../users');
const Tasks = require('../../tasks');
const events = require('../../events');




router.get('/',(req,res) => {
res.json(events);
});


router.get('/events/:id', (req,res) => {
    const found = events.some(event => event.id == req.params.id);
    if(found) {
        res.json(events.filter(event => event.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});

router.get('/events/location/:location', (req,res) => {
    //const updateTask = req.body;
    //const foundlocation=updateTask.id?true:false; 
    
    events.forEach(event => {
        if(event.location === req.params.location) {
            res.json(event);
        }
    });

});
router.get('/events/basedescription/:des', (req,res) => {
     
    events.forEach(event => {
        if(event.description === req.params.des) {
            res.json(event);
        }
    });
});
router.get('/events/registerationprice/:price', (req,res) => {
     
    events.forEach(event => {
        if(event.price === req.params.price) {
            res.json(event);
        }
    });
});
router.get('/events/places/:place', (req,res) => {
     
    events.forEach(event => {
        if(event.remaining_places === req.params.place) {
            res.json(event);
        }
    });
});
router.get('/events/speakers/:speakers', (req,res) => {
     
    events.forEach(event => {
        if(event.speakers === req.params.speakers) {
            res.json(event);
        }
    });
});
router.get('/events/topics/:topics', (req,res) => {
     
    events.forEach(event => {
        if(event.topics === req.params.topics) {
            res.json(event);
        }
    });
});



module.exports=router;


