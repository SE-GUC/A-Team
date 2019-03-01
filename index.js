const express=require('express'); 
const path = require('path');

const app = express();

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const feedbacks=require ('./routes/api/feedbacks')

// const tasks=require('./routes/api2/feedbacks1')


app.use('/api/feedbacks', feedbacks)


//INDEX ROUTE
// feedbacks.get("/feedbacks", function(req,res){
//     feedbacks.find({}, function(err, feedbacks){
//         if(err){
//             console.log("ERROR");
//         } else{
//             res.render("index", {feedbacks : feedbacks});
//         }
//     });


// app.use('/api/feedbacks', tasks);});

