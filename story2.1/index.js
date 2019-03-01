const express = require('express');
const app = express();
const http= require('http')
const sevrer= http.createServer(app);
const PartnerRequest= require('./routes/api/PartnerRequest')


app.use(express.json())


const port= 3000



app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello</h1>
    <a href="/api/PartnerRequest" > to initiate a request to organize an event</a>`)
})

app.use('/api/PartnerRequest',PartnerRequest)

 app.listen(port, () => console.log(`listening to port ${port}`))

