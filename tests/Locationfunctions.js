    
const axios = require('axios');
const functions = {
        

        

       
       //https://ateamse.herokuapp.com/api/locations
       getLocation: async () => {
        const locations = await axios.get('https://ateamse2.herokuapp.com/api/locations')
        //console.log(locations.data)
        return locations
        },

        deleteLocation: async (title) => {
                const locations = await axios.delete('https://ateamse2.herokuapp.com/api/locations/'+title, {})
                //console.log(locations.data.data)
               return locations.data
            },
        postLocation: async() => {
                return axios({
                    method:'post',
                    url: 'https://ateamse2.herokuapp.com/api/locations',
                    headers: {'Content-Type': 'application/json'},
                    data: {
                        title:'testing post',
                        location:'testing post again',
                        capacity:2000,
                        booked:"booked"
        
                    }
                });
            },
           
        
        updateLocationInfo: async(id,titleup)  => {
                const location = await axios.put('http://localhost:4000/api/locations/'+id, {title: titleup})
                return location
            },

        updateLocationcapacity: async(id,capacityup)  => {
                const location = await axios.put('http://localhost:4000/api/locations/'+id, {capacity: capacityup})
                return location
            },
            
         // for story 2.2 (as  member i should be able to book available locations)  
        updateLocationBooking: async(id,bookedup)  => {
                const location = await axios.put('http://localhost:4000/api/locations/'+id, {booked:bookedup})
                return location
            },  

  
        
	
        
};



module.exports = functions;