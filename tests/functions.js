const axios = require('axios')

const functions={
    login: async() => {
        return axios({
            method:'post',
            url: 'https://ateamse2.herokuapp.com/api/users/login/',
            headers: {'Content-Type': 'application/json'},
            data: {
                email:'lifelianghje@gmail.com',
                password:'$2a$10$HXZYAHvmB1DZxa0Mph7.X.nAeuognJstfvAxDA/RJDvwfrdHHOcPK'
            }
        });
    },
    getNotifs: async(id) => {
        const notifs = await axios.get('https://ateamse2.herokuapp.com/api/notify/'+id+'/notifyMember/')
        //console.log(notifs.data.notifications[0])
        return notifs.data
    },
    postNotif: async(id,taskd)  => {
        const m =  axios({
            method:'post',
            url: 'https://ateamse2.herokuapp.com/api/notify/' +id +'/notifyMember/',
            headers: {'Content-type': 'application/json'},
            data: {
                taskid: taskd
            }
        })
        const no = await axios.get('https://ateamse2.herokuapp.com/api/notify/' +id +'/notifyMember/')
        console.log(no.data.notifications)
        return no

    },
}
module.exports = functions;