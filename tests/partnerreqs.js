const axios = require('axios')

const funcs= {
    add : (x,y)=> x+y,
     geteventrequests: ()=>{
        return axios({
        method:'get',
        url: 'http://localhost:4000/api/PartnerRequest/geteventrequest',
        headers: {'Content-Type': 'application/json'}
     });
 },
     testa: async()=>{
     return axios({
         method:'post',
         url: 'http://localhost:4000/api/PartnerRequest/testa',
         headers: {'Content-Type': 'application/json'},
         data:{
                organizer:"hooda bondo2"
         }
     });
 },
    deleteeventrequest: async()=>{
     return axios({
        method: 'delete',
        url: 'http://localhost:4000/api/PartnerRequest/deleterequest/5c9d0eef9e6ebe00179d357b',
        headers: {'Content-Type': 'application/json'}
     });
 },
 update: async()=>{
   return axios({
         method: 'put',
        url: 'http://localhost:4000/api/PartnerRequest/update/5c9e2048a09ad158a0193d2d',
         headers: {'Content-Type': 'application/json'},
         data: {
             organizer: "youssef shalaby"
         }
});
     }
    


    
}
module.exports=funcs

