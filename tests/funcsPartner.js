const axios = require('axios');


const funcs ={
    getpartner: async () => {
        const g = await axios.get('http://localhost:4000/api/partners/read/')
        console.log(g)
        return g
    },
   
    getpartnerByID: async () => {
        const g = await axios.get('http://localhost:4000/api/partners/'+ id)
        console.log(g)
        return g
    },
    updatepartner: async(id,con) => {
        const m = await axios.put('http://localhost:4000/api/partners/update/'+id, {consultancy_agency_id: con})
        console.log(m.data)
        return m.data

    },
    deletepartner: async(id) => {
        const x = axios.delete('http://localhost:4000/api/partners/delete/'+id)
        
        return x
    },
    postpartner: async() => {
        return axios({
            method:'post',
            url: 'http://localhost:4000/api/partners/addpartner/',
            headers: {'Content-Type': 'application/json'},
            data: {
                consultancy_agency_id:'5c9bd0d9ac225200175df719'

            }

        });
    },

}

module.exports=funcs