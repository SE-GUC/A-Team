const axios = require('axios')
const assignMemberfns={
    assign: async(id, memd) =>{
        const m=axios({
            url: 'https://ateamse.herokuapp.com/api/'+id + 'assignMember',
            headers:{'Content-type': 'application/json'},
            data:{
                memberid: memd
            }
        })
        const n= await axios.get('https://ateamse.herokuapp.com/api/'+id + 'assignMember')
        return n
    }
}