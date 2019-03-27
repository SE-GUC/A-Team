const axios = require('axios');
const heroku='https://ateamse2.herokuapp.com/'
const headers={
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
        
}
const functions = {
        add: (x,y) => x+y,
        createProject:async()=>{
                    const project= await axios.post('https://ateamse2.herokuapp.com/api/project/create',{
                    project_name:'Running Jest on project CRUD',
                    partner_responsible: '5c96352dd744db39e4940f23',
                    consultancy_agency_sponsor:'5c9b331577541a0017be83de'
                },{headers:headers})
               return project 
                      
            },
            getproject:async()=>{
              return  axios({
                        method: 'get',
                        url: 'https://ateamse2.herokuapp.com/api/project/crud',
                        headers: {'Content-Type': 'application/json'}, 
                        data: {
                        id:'5c9b3d2a6c59bf0017b4a481'
                        }
                      });
        }
        
};
module.exports = functions;