const express=require('express');
const mongoose = require('mongoose')
var cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors());

const http= require('http')
const events=require('./routes/api/events')
const users=require('./routes/api/users')
const partner=require('./routes/api/partners')
const applications = require('./routes/api/applications')
const locations = require('./routes/api/locations')
const PartnerRequest= require('./routes/api/PartnerRequest')
const feedbacks=require ('./routes/api/feedbacks')
const tasks= require('./routes/api/tasks')
const projects= require('./routes/api/project')
const dummy = require('./routes/api/dummy')

const ConsultancyAgency = require('./routes/api/consultancy_agencies')

//const tasks_objects= require('./routes/api/tasks_objects')




    mongoose.connect('mongodb+srv://mohamedhooda:Fox2871998@databaselirten-ld3hs.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
    mongoose.connection.once('open', function(){
      console.log('Conection has been made!');
    }).on('error', function(error){
        console.log('Error is: ', error);
    });



app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello friend</h1>
    <a href="/api/events" > to create an event</a>
    <a href="api/tasks" >Go to member page</a>`
    )
})


app.get('/', (req, res) => {
    res.send(`<h1>Freelancer </h1>
    <a href="/api/locations">Locations</a>
       `);
})



app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello</h1>
    <a href="/api/PartnerRequest" > to initiate a request to organize an event</a>`)
})


app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello</h1>
    <a href="api/tasks" >Go to member page</a>`)
})






app.use('/api/events', events)
app.use('/api/users', users)
app.use('/api/locations', locations)
app.use('/api/applications',applications)
app.use('/api/PartnerRequest',PartnerRequest)
app.use('/api/feedbacks', feedbacks)
app.use('/api/tasks',tasks)
app.use('/api/project',projects)
app.use('/api/dummy',dummy)
app.use('/api/consultancyAgencies',ConsultancyAgency)
app.use('/api/partners',partner)
//app.use('/api/tasks',tasks_objects)



app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })
const port = 4000 | process.env.PORT;
app.listen(process.env.PORT || 4000)
