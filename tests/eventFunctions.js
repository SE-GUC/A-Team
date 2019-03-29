const axios = require('axios');

const myFuncs = {
        createEvent:async()=>{
                    const newEvent=await axios.post('https://ateamse2.herokuapp.com/api/events', {                            
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
                    console.log(newEvent.data.data);
                    return newEvent.data.data;
          },
        getEvents: async () => {
          const events = await axios.get('https://ateamse2.herokuapp.com/api/events')
          return events
        },
        updateEvent: async(id,remaining_places) => {
          const updatedEvent = await axios.put('https://ateamse.herokuapp.com/api/events/'+id+"", {remaining_places: remaining_places})
          return updatedEvent.data.data
      },         
      deleteEvent:async()=>{
            const deletedEvent=axios.delete('https://ateamse2.herokuapp.com/api/events', {
                    delete:{
                        id:'5c93b78f1d4b8e5b48557ba0'
                    }
               }) 
          }
        
};
myFuncs.createEvent();
module.exports = myFuncs;