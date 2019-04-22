const axios = require('axios');
const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWUzNzNlYWVhNTBlNDg2MDBjODQ4MyIsIm5hbWUiOiJNb2hhbWVkIE1haG1vdWQiLCJlbWFpbCI6Im1oQGxpcnRlbi5jb20iLCJ0eXBlIjpbIlAiXSwiaWF0IjoxNTU1NzQ4NDI2LCJleHAiOjE1NTkzNDQ4MjZ9.8ztVtyqgNEYtsNuTzdD19r2lM6achDl1l6BKFFpt0ZU'

const myFuncs = {
        createUser:async()=>{
                    const newUser=await axios.post('http://localhost:4000/api/users/register', {                            
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
          const users = await axios.get('http://localhost:4000/api/users')
          console.log(users.data)
          return users
        },
        updatedUser: async(id,name) => {
          const updatedUser = await axios.put('http://localhost:4000/api/users/'+id+"", {name: name})
          console.log(updatedUser.data.data)
          return updatedUser.data.data
      },
      deleteUser: async(id) =>{
          const deletedUser=await axios.delete('http://localhost:4000/api/users/'+id)
          console.log(deletedUser.data.data)
          return deletedUser;
      },
      addEventIAttended: async(userid,id) =>{
        const specificEvent = await axios.get('http://localhost:4000/api/events/getid/'+id)
        const userAfterEvent= await axios.post('http://localhost:4000/api/users/'+userid+'/addevent',{
          eventid:id
        })
        return userAfterEvent.data.data

      }
  };
  // myFuncs.addEventIAttended('5cae2d049cd95a5754daa7e4', '5cadbf76f0282229d89e7bd4');
module.exports = myFuncs;