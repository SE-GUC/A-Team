const axios=require('axios')
const myFuncs = {
    getUsers: async () => {
      const users = await axios.get('https://ateamse2.herokuapp.com/api/users')
      return users
    }, 
    deleteUser:async()=>{
        const deletedUser=axios.delete('https://ateamse2.herokuapp.com/api/users', {
                delete:{
                    id:'5c93cd1f1c9fe35274d2f624'
                }
           }) 
      },
    createUser:async()=>{
        const newUser=await axios.post('https://ateamse2.herokuapp.com/api/users/register', {                            
        name: "Mohamed Mahrous",
        email: "12lifelighbnne123123@gmail.com",
        password: "wadasfeww",
        dob: "1983-03-09T22:00:00.000Z",
        phone: 6677889 ,
        eventsAttended: ["5c93cd1f1c9fe35274d2f624","5c93cd1f1c9fe35274d2f624"],
        account_open_on: "ayeyo"
        })
        console.log(newUser.data)
        return newUser.data.data;
},
updateUser: async(id,name) => {
    const updatedUser = await axios.put('https://ateamse.herokuapp.com/api/users'+id, {name: name})
    console.log(updatedUser.data.data)
    return updatedUser.data.data
},        
};
myFuncs.createUser();
module.exports = myFuncs;
