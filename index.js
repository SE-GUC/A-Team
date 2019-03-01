const express=require('express');

const app = express();
app.use(express.json())


const http= require('http')
const server= http.createServer(app);
const events=require('./routes/api/events')
const applications = require('./routes/api/applications')
const locations = require('./routes/api/locations')




app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello friend</h1>
    <a href="/api/events" > to create an event</a>`)
})


app.get('/', (req, res) => {
    res.send(`<h1>Freelancer </h1>
    <a href="/api/locations">Locations</a>
       `);
})



app.use('/api/events', events)
app.use('/api/locations', locations)
app.use('/api/applications',applications)


app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })
const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
 