const axios = require('axios');
const heroku='https://ateamse2.herokuapp.com/'
const functions = {
        add: (x,y) => x+y,
        createProject:async()=>{
                const project= await axios.post('https://ateamse2.herokuapp.com/project/create',{
                    project_name:'Running Jest on project CRUD',
                    // partner_responsible: uuid,
                    //consultancy_agency_sponsor:uuid 
                })
                .then(function(response){
                        console.log(response)
                })
                .catch(function (error) {
                        console.log(error);
                      })
                return project
            }
        
};
module.exports = functions;