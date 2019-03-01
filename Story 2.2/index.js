const express = require('express')
const locations = require('./routes/api/locations')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Freelancer </h1>
    <a href="/api/locations">Locations</a>
       `);
})




app.use('/api/locations', locations)





// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

