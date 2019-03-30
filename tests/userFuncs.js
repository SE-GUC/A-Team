const axios = require('axios');

const myFuncs = {
        createEvent:async()=>{
                    const newEvent=await axios.post('https://ateamse2.herokuapp.com/api/users', {                            
                      remaining_places: 250,
                      location: "5c9bff7f569b9a001796d40a",
                      about: "MERN Programming Style",
                      price: 55,
                      speakers: ["Absalam", "Bill Gates"],
                      topics: ["Python", "Java"],
                      type: "Computer Engineering",
                      partnerInitiated: "5c93cd1f1c9fe35274d2f624",
                      request:"5c93cd1f1c9fe35274d2f624",
                      attendees: ["5c93cd1f1c9fe35274d2f624","5c93cd1f1c9fe35274d2f624"]
                    })
                    return newEvent.data.data;
          },
        getUsers: async () => {
          const users = await axios.get('https://ateamse2.herokuapp.com/api/users')
          console.log(users.data)
          return users
        },
        updateEvent: async(id,name) => {
          const updatedUser = await axios.put('https://ateamse.herokuapp.com/api/users/'+id+"", {name: name})
          return updatedUser.data.data
      }    
};
myFuncs.getUsers(); 
module.exports = myFuncs;