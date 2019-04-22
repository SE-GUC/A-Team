
const axios = require('axios');
const heroku='http://localhost:4000/'
const headers={
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
        
}
const functions = {
        add: (x,y) => x+y,

        getEvents: async () => {
            const events = await axios.get('http://localhost:4000/api/events')
            return events
          },

          
         Review: async(id, isReviewed) => {
               
                const k = await axios.put('http://localhost:4000/api/tasks/review/'+id, {is_reviewed: isReviewed})
                console.log(k.data)
                return k.data
                
         },



          eventfeedback: async(id, usid, commentt, ratee) => {
            try{
            const newFeedback={
                user_id: usid,
                comment: commentt,
                rate: ratee
              }
              
              const k = await axios.put('http://localhost:4000/api/events/'+id+"/feedback", newFeedback )
            console.log(k.data)
            return k.data 
            } catch(e) {
                console.log('Error caught');
              }
              
            
            
      },

      


          
        
         
};
functions.Review('5c9b9bbf69bb9e0017b86e6f','true')
functions.eventfeedback('5c9e3446559ed00017ece5ec','5c93cd1f1c9fe35274d2f624','tamaaaam', 2)

module.exports = functions