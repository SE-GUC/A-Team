const axios = require('axios')
const functions = {
    getAgencies: async() => {
        const agent = await axios.get('https://ateamse.herokuapp.com/api/consultancyAgencies/view_agencies')
        return agent.data
    },

    updateAgencyInfo: async(id,infor)  => {
        const n = await axios.put('https://ateamse.herokuapp.com/api/consultancyAgencies/'+id, {info: infor})
        return n
    },

    
    postAgency: async() => {
        return axios({
            method:'post',
            url: 'https://ateamse.herokuapp.com/api/consultancyAgencies/',
            headers: {'Content-Type': 'application/json'},
            data: {
                info:'testing post',
                field_of_work:'testing post again',
                board_members:['amr','ammar','shalaby','hooda'],
                reports:['report1','report2','report3']

            }
        });
    },
    
    deleteAgency: async (id) => {
        const n = await axios.delete('https://ateamse.herokuapp.com/api/consultancyAgencies/'+id, {})
        console.log(n.data.data)
        return n.data
    },

}

module.exports = functions;
