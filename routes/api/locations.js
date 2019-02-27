const express = require('express')
const router = express.Router()

// We will be connecting using database 
const LOC = require('../../models/LOC')

// temporary data created as if it was pulled out of the database ...
const locations = [
    new LOC('City Stars', 'Nasr City', 20.000, "booked"),
    new LOC('Mall Of Arabia', '6th of october', 200.000, "available"),
    new LOC('Sun City', 'sheraton', 50.000, "booked"),
    new LOC('GUC', 'Tagmoaa', 100.000, "available"),
    ];

router.get('/', (req, res) => res.json({ data: locations }))

module.exports = router