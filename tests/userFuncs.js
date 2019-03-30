const axios = require('axios');

const myFuncs = {
        createUser:async()=>{
                    const newUser=await axios.post('https://ateamse2.herokuapp.com/api/users/register', {                            
                      name: "Tessa",
                      email: "life1liane12311111111@gmail.com",
                      password: "$2a$10$5tqIRQrrI9QiyrOAQAH6...x4vzpvbC0SWIzJgf2V1VszM7V7OEnu",
                      dob: "1983-03-09T22:00:00.000Z",
                      phone: 104840022,
                      account_open_on: ""
                      })
                      console.log(newUser.data.data)
                    return newUser.data.data;

          },
        getUsers: async () => {
          const users = await axios.get('https://ateamse2.herokuapp.com/api/users')
          console.log(users.data)
          return users
        },
        updatedUser: async(id,name) => {
          const updatedUser = await axios.put('https://ateamse2.herokuapp.com/api/users/'+id+"", {name: name})
          console.log(updatedUser.data.data)
          return updatedUser.data.data
      },
      deleteUser: async(id) =>{
          const deletedUser=await axios.delete('https://ateamse2.herokuapp.com/api/users/'+id)
          console.log(deletedUser.data.data)
          return deletedUser;
      },
  };
  myFuncs.deleteUser('5c9e8dc52d814000175cb808');
module.exports = myFuncs;