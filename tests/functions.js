const axios = require('axios');

const functions = {
    add: (a,b) => a+b,

    getTasks: async () => {
        const task = await axios.get('https://ateamse.herokuapp.com/api/tasks/read')
        return task.data
    },
    getUser: async() => {
        const user = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        return user
    },
    updateTaskDesc: async(id,desc) => {
        const m = await axios.put('https://ateamse.herokuapp.com/api/tasks/update/'+id, {description: desc})
        return m

    },
    deleteTaskDesc: async(id) => {
        const manga = axios.delete('https://ateamse.herokuapp.com/api/tasks/'+id, {})
        return manga
    }, 
    postTask: async() => {
        return axios({
            method:'post',
            url: 'https://ateamse.herokuapp.com/api/tasks/create/',
            headers: {'Content-Type': 'application/json'},
            data: {
                name: 'Testing Post',
                time_of_post: '01.01.2001',
                time_of_review:"01.02.2012",
                monetary_compensation: 2000,
                price:898989,
                time_of_assingment:"01.02.2012",
                is_assigned:"false",
                time_expected:"3 days",
                level_of_comitment:"High",
                is_reviewed:"false",
                experience_needed:"6 yrs",
                description:"TESTING PUT",
                skills:["Apex Legends"],
                response_from_admin:""

            }

        });
    },
    getTaskDesc: async(id) => {
        const manga = await axios.get('https://ateamse.herokuapp.com/api/tasks/read/'+id)
        console.log(manga.data.data)
        return manga.data
    },
    

}

module.exports = functions;
