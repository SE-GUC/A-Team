const axios = require('axios')
const functions = {
    getNotifs: async(id) => {
        const notifs = await axios.get('http://localhost:4000/api/notify/'+id+'/notifyMember/')
        //console.log(notifs.data.notifications[0])
        return notifs.data
    },
    postNotif: async(id,taskd)  => {
        const m =  axios({
            method:'post',
            url: 'http://localhost:4000/api/notify/' +id +'/notifyMember/',
            headers: {'Content-type': 'application/json'},
            data: {
                taskid: taskd
            }
        })
        const no = await axios.get('http://localhost:4000/api/notify/' +id +'/notifyMember/')
        console.log(no.data.notifications)
        return no

    },
}
module.exports = functions;