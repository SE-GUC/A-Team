const axios = require('axios')

const funcs= {
    add : (x,y)=> x+y,
     geteventrequests: ()=>{
        return axios({
        method:'get',
        url: 'https://ateamse2.herokuapp.com/api/PartnerRequest/geteventrequest',
        headers: {'Content-Type': 'application/json'}
     });
 },
     testa: async()=>{
     return axios({
         method:'post',
         url: 'https://ateamse2.herokuapp.com/api/PartnerRequest/testa',
         headers: {'Content-Type': 'application/json'},
         data:{
                organizer:"hooda bondo2"
         }
     });
 },
    deleteeventrequest: async()=>{
     return axios({
        method: 'delete',
        url: 'https://ateamse2.herokuapp.com/api/PartnerRequest/deleterequest/5c9d0eef9e6ebe00179d357b',
        headers: {'Content-Type': 'application/json'}
     });
 },
 update: async()=>{
   return axios({
         method: 'put',
        url: 'https://ateamse2.herokuapp.com/api/PartnerRequest/update/5c9e2048a09ad158a0193d2d',
         headers: {'Content-Type': 'application/json'},
         data: {
             organizer: "youssef shalaby"
         }
});
     }
    


    
}
module.exports=funcs

