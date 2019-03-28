    
const axios = require('axios');
const functions = {
        

        

        getLocation: async () => {
        const locations = await axios.get('https://ateamse.herokuapp.com/api/locations')
        //console.log(locations.data)
        return locations
        },

        deleteLocation: async (title) => {
                const locations = await axios.delete('https://ateamse.herokuapp.com/api/locations/'+title, {})
                //console.log(locations.data.data)
               return locations.data
            },
        postLocation: async() => {
                return axios({
                    method:'post',
                    url: 'https://ateamse.herokuapp.com/api/locations',
                    headers: {'Content-Type': 'application/json'},
                    data: {
                        title:'testing post',
                        location:'testing post again',
                        capacity:2000,
                        booked:"booked"
        
                    }
                });
            },
        
        updateLocationInfo: async(title,titleup)  => {
                const location = await axios.put('https://ateamse.herokuapp.com/api/locations/'+title, {title: titleup})
                return location
            },

  
        
	
        
};



module.exports = functions;