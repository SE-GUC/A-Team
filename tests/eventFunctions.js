const axios = require('axios');

const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWUzNzNlYWVhNTBlNDg2MDBjODQ4MyIsIm5hbWUiOiJNb2hhbWVkIE1haG1vdWQiLCJlbWFpbCI6Im1oQGxpcnRlbi5jb20iLCJ0eXBlIjpbIlAiXSwiaWF0IjoxNTU1NzQ4NDI2LCJleHAiOjE1NTkzNDQ4MjZ9.8ztVtyqgNEYtsNuTzdD19r2lM6achDl1l6BKFFpt0ZU'
const feedback= 'Enter your comment here!'
const rate = 5 //enter your rating here

const myFuncs = {
        createEvent:async()=>{
                    const newEvent=await axios.post('http://localhost:4000/api/events', {                            
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
          const events = await axios.get('http://localhost:4000/api/events')
          return events
        },
        updateEvent: async(id,remaining_places) => {
          const updatedEvent = await axios.put('http://localhost:4000/api/events/'+id+"", {remaining_places: remaining_places})
          return updatedEvent.data.data
      },         
      deleteEvent:async(id)=>{
            const deletedEvent=axios.delete('http://localhost:4000/api/events'+id)
                    return deletedEvent;
               },
      geteventbytype: async(type)=>{
            const event=await axios.get('http://localhost:4000/api/events/'+type+"", {type:type})
            console.log(event.data.data)
            return event.data.data
      },
      addNewFeedback: async(id)=>{
        const url='http://localhost:4000/api/events/'+id+'/feedback'

       const newFeedback=await  axios({
            method: 'POST',
            url: url,
            headers: {
                authorization: token
            }, 
            data: {
                comment:feedback,
                rate: rate
            }
          })
          return newFeedback //returns the event that i just wrote a feedback in
      },

      addNewApplication: async(id, user_id, isAccepted)=>{
        const url='http://localhost:4000/api/events/'+id+'/apply'

       const newApplication = await axios({
            method: 'POST',
            url: url,
            headers: {
                authorization: token
            }
          })
          return newApplication //returns the event that i just wrote a feedback in
      }
        
};
myFuncs.geteventbytype('eh feih eh');
module.exports = myFuncs;