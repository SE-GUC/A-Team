const axios = require('axios')
const assignMemberfns={
    assign: async(id, memd) =>{
        const m=axios({
            url: 'http://localhost:4000/api/'+id + 'assignMember',
            headers:{'Content-type': 'application/json'},
            data:{
                memberid: memd
            }
        })
        const n= await axios.get('http://localhost:4000/api/'+id + 'assignMember')
        return n
    }
}