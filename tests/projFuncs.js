const axios = require('axios');
const heroku='http://localhost:4000/'
const headers={
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
        
}
const functions = {
        add: (x,y) => x+y,
        createProject:async()=>{
                return  axios({
                          method: 'post',
                          url: 'http://localhost:4000/api/project/create',
                          headers: {'Content-Type': 'application/json'}, 
                          data: {
                          project_name:'This project was created by jest',
                          partner_responsible: '5c9b39236c59bf0017b4a442',
                          consultancy_agency_sponsor:'5c9b39236c59bf0017b4a443'
                          }
                        });
          },
            getproject:async()=>{
              return  axios({
                        method: 'get',
                        url: 'http://localhost:4000/api/project/crud',
                        headers: {'Content-Type': 'application/json'}, 
                        data: {
                        id:'5c9b3d2a6c59bf0017b4a481'
                        }
                      });
        },
        updateProject:async()=>{
                return  axios({
                          method: 'put',
                          url: 'http://localhost:4000/api/project/crud',
                          headers: {'Content-Type': 'application/json'}, 
                          data: {
                          id:'5c9b396a6c59bf0017b4a445',
                          update:{
                                project_name:'This project was Updated by jest',
                                partner_responsible: '5c9b39236c59bf0017b4a442'
                          }

                          }
                        });
          },
          deleteProject:async()=>{
                return  axios({
                          method: 'delete',
                          url: 'http://localhost:4000/api/project/crud',
                          headers: {'Content-Type': 'application/json'}, 
                          data: {
                                id:'5c9b396a6c59bf0017b4a445'
                          }
                        });
          },
          addTask:async()=>{
                return  axios({
                          method: 'post',
                          url: 'http://localhost:4000/api/project/5c9b39236c59bf0017b4a441/addTask',
                          headers: {'Content-Type': 'application/json'}, 
                          data: {
                                taskid:'5c9b9bbf69bb9e0017b86e6f'

                          }
                        });
          }
        
};
module.exports = functions;