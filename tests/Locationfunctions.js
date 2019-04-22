    
const axios = require('axios');
const functions = {
        

        

       
       //https://ateamse.herokuapp.com/api/locations
       getLocation: async () => {
        const locations = await axios.get('http://localhost:4000/api/locations/')
        //console.log(locations.data)
        return locations
        },

        deleteLocation: async (title) => {
                const locations = await axios.delete('http://localhost:4000/api/locations/'+title, {})
                //console.log(locations.data.data)
               return locations.data
            },
        postLocation: async() => {
                return axios({
                    method:'post',
                    url: 'http://localhost:4000/api/locations/',
                    headers: {'Content-Type': 'application/json'},
                    data: {
                        title:'test',
                        subtitle:'test',
                        location:'test',
                        capacity:2000,
                        booked:"test"
        
                    }
                });
            },
           
        
        updateLocationInfo: async(id,titleup,subtitle,location,capacity,booked)  => {
            const Location = await axios.put('http://localhost:4000/api/locations/'+id, {title:titleup,subtitle,location,capacity, booked})
            return Location
            }, 
            

        updateLocationcapacity: async(id,capacityup)  => {
                const location = await axios.put('http://localhost:4000/api/locations/'+id, {capacity: capacityup})
                return location
            },
            
         // for story 2.2 (as  member i should be able to book available locations)  
        updateLocationBooking: async(id,title,subtitle,location,capacity,bookedup)  => {
                const Location = await axios.put('http://localhost:4000/api/locations/'+id, {title,subtitle,location,capacity, booked:bookedup})
                return Location
            },  

            

  
        
	
        
};



module.exports = functions;