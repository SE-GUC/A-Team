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




        // const n = await axios.post('http://localhost:4000/api/notify/'+id+'/notifyMember/', {notifications: taskd})
        // return n.data
        //i have an array esmo notifications in members, i wanna add haga fi ok 1 sec msh bedan walahy bas huwa 3ayez el names yko
        //bas asl it's a post request? wala eh idu whats wrong
        //asl i was confused bardo fel awel but hooda kaman kan amelha keda
        //no n its ef put, you want to update, go on
        //for now bas srryyy
        //always save 

    },


}
functions.postNotif()
module.exports = functions;