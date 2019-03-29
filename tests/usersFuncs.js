const axios=require('axios')
const myFuncs = {
    getEvents: async () => {
      const users = await axios.get('https://ateamse2.herokuapp.com/api/users')
      return users
    }, 
    deleteUser:async()=>{
        const deletedUser=axios.delete('https://ateamse2.herokuapp.com/api/users', {
                delete:{
                    id:'5c93cd1f1c9fe35274d2f624'
                }
           }) 
      }
};

module.exports = myFuncs;
