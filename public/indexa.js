const express = require('express');
const path = require('path');
const app = express();
const story = require('./routes/api/story');






//Body parser to POST
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routing
app.use('/api/story',story);
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));