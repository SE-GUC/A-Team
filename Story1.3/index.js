const express = require('express');
const path = require('path');
const app = express();




//PRINTS HELLO ON ANY GET 
/*const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
app.use(logger);

*/


//Body parser to POST
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//setting static folder that servers all HTML files in public
app.use(express.static(path.join(__dirname,'public')));
//routing
app.use('/api/Tasks',require('./routes/api/tasks'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));




/*app.get('/', (req,res) => { //(request,response)
    //res.send('<h1>Hello World!!!#</h1>');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    
}); */
//Listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));   