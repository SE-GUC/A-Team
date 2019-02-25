const express=require('express');
const app= express();
const PORT =3000;
const http= require('http')
const sevrer= http.createServer(app);
const tasks= require('./routes/api/tasks')
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
     res.send(`
     <h1>Hello</h1>
     <a href="api/tasks" >Go to member page</a>`)
})
  
app.use('/api/tasks',tasks)

sevrer.listen(PORT,()=>{console.log("Listening on port 3000");
});

