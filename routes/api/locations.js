const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

 
const Location = require('../../models/Location')


const locations = [
    new Location('City Star', 'Nasr City', 20000, "booked"),
    new Location('Mall Of Arabia', '6th of october', 200000, "available"),
    new Location('Sun City', 'sheraton', 50000, "booked"),
    new Location('GUC', 'Tagmoaa', 100000, "available"),
    ];

router.get('/', (req, res) => res.json({ data: locations }))

// get single location 

router.get('/:title', (req,res) => {
    const found = locations.some(locations => locations.title ===req.params.title);
    if(found) {
        res.json(locations.filter(locations => locations.title ===req.params.title));
    } else {
        res.status(400).json({msg: `title ${req.params.title} not found`});
    }
});


// Create new location
router.post('/', (req, res) => {
    const newLocation= {
	 title : req.body.title,
     location : req.body.location,
     capacity : req.body.capacity,
     booked : 'available',
     id:uuid.v4()
     

    }
    if(!newLocation.title || !newLocation.location || !newLocation.capacity ){
       return res.status(400).json({msg:'Invalid'});
    }

    locations.push(newLocation);
    res.json(locations);

});

	


// Update  location 
router.put('/:title', (req,res) => {
    const found = locations.some(locations => locations.title == req.params.title);

    if(found) {
        const updateLocation = req.body;
        locations.forEach(location => {
            if(location.title === req.params.title) {
                location.location = updateLocation.location? updateLocation.location : location.location;
                location.capacity = updateLocation.capacity? updateLocation.capacity : location.capacity;
                location.booked = updateLocation.booked? updateLocation.booked : location.booked;
                
                
                res.json({msg: `Location updated`, locations});
            }
        });
   } else {
        res.status(400).json({msg: `TITLE ${req.params.title} not found`});
    }
});

//Delete Location
router.delete('/:title', (req,res) => {
    const found = locations.some(locations => locations.title == req.params.title);
    if(found) {
        
        res.json({msg:'Location deleted' , locations :  locations.filter(locations => locations.title !== req.params.title)});
    
    } else {
        res.status(400).json({msg: `title ${req.params.title} not found`});
    }
});

module.exports = router