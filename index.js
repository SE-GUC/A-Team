const express=require('express');
const applications=require('./routes/api/applications')

const app = express();
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>Please Apply</h1>
    <a href="/api/applications">Applications</a>
    `);
})


app.use('/api/applications', applications)



const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

