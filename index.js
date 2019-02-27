const express=require('express');
const tasks=require('./routes/api2/tasksh')

const app = express();
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Tasks</h1>
    <a href="/database/tasks">Tasks</a>
    `);
})


app.use('/api/tasks', tasks)



const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

