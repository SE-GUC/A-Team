
const axios = require('axios')
	const functions = {
        add: (x,y) => x+y,

	    getMember: async() => {
            const member = await axios.get('http://localhost:4000/api/members')
            
	        return member.data
        },
        postMember: async() => {
            return axios({
                method:'post',
                url: 'http://localhost:4000/api/members/register',
                headers: {'Content-Type': 'application/json'},
                data: {
                    years_of_experience:10,
                    skills:"testing",
                    interests:"testing"

                },
        
        } )      
        },
        deleteMember: async(id) => {
            const members = await axios.delete('http://localhost:4000/api/members/'+id, {})
            console.log(members.data)
            return members.data
        },
        updateMember: async(id,years_of_experienceup)  => {
            const member = await axios.put('http://localhost:4000/api/members/'+id, {years_of_experience: years_of_experienceup})
            return member
        },
        updateMemberSkills: async(id,skillsup)  => {
            const member = await axios.put('http://localhost:4000/api/members/'+id, {skills: skillsup})
            return member
        },
    }

functions.deleteMember('5c9e423d3ed735040f9c4436')
module.exports = functions;
