const axios = require('axios')
const assignMemberfns={
    assign: async(id, memd) =>{
        const m=axios({
            url: 'https://ateamse2.herokuapp.com/api/'+id + 'assignMember',
            headers:{'Content-type': 'application/json'},
            data:{
                memberid: memd
            }
        })
        const n= await axios.get('https://ateamse2.herokuapp.com/api/'+id + 'assignMember')
        return n
    }
}