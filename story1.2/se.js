const express = require('express');
//const members = require('./members');
const app = express();
//const members = express.Router();
const members= require('./routes/api/members');
const http= require('http');
const srvr= http.createServer(app);
const PORT =  3000;
app.use(express.json());
app.use(express.urlencoded({extended : false }));



app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello</h1>
    <a href="api/members" >Go to member page</a>`)
})

app.use('/api/members',members)

//app.use(logger);

//app.get('/api/members', (req, res) =>
 //res.json(members)
 //);


//app.use(express.static(path.join(__dirname, 'public' )));

srvr.listen(PORT,()=>{console.log("Listening on port 3000");
});
//app.listen(PORT, () => console.log('Server started on port ${PORT}') );
