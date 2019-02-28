const express=require('express');

const app = express();
app.use(express.json())


const http= require('http')
const server= http.createServer(app);
const events=require('./routes/api/events')






app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello friend</h1>
    <a href="/api/events" > to create an event</a>`)
})


app.use('/api/events', events)



const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
 