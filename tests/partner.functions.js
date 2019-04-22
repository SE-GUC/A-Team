const axios = require('axios');
const functions = {
  
//partnerrequests crud
    getPartner: async () => {
        const g = await axios.get('http://localhost:4000/api/PartnerRequest/geteventrequest/')
        //console.log(g)
        return g
    },
   
    updatePartner: async(id,organ) => {
        const m = await axios.put('http://localhost:4000/api/PartnerRequest/update/'+id, {organizer: organ})
        //console.log(m.data)
        return m.data

    },
    deletePartner: async(id) => {
        const x = axios.delete('http://localhost:4000/api/PartnerRequest/deleterequest/'+id)
        
        return x
    },
    postPartner: async() => {
        return axios({
            method:'post',
            url: 'http://localhost:4000/api/PartnerRequest/addrequest/',
            headers: {'Content-Type': 'application/json'},
            data: {
                organizer:'Farah'

            }

        });
    },


}
const desc = 'new description'
const id = '5c9d053a9e6ebe00179d356c'
functions.updatePartner(id,desc)
module.exports = functions;
