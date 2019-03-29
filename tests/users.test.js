/**
 * @jest-environment node
 */
const funcs = require('./userFuncs');

 test('First user is Tessa', async () => {
    const response =  await funcs.getUsers()
    expect(response.data[0].name).toBe("Tessa")
}); 
// test('Creating a user test',async ()=>{
//     const result = await funcs.createUser()
//     const request={
//         name: "Mohamed Mahrous",
//         email: "12lifelighbnne123123@gmail.com",
//         password: "wadasfeww",
//         dob: "1983-03-09T22:00:00.000Z",
//         phone: 6677889 ,
//         eventsAttended: [],
//         account_open_on: "ayeyo"
//     }
//     expect(result).toBeDefined()
//     expect(result.name).toEqual(request.name)
//     expect(result.email).toEqual(request.email)
//     expect(result.password).toEqual(request.password)
//     expect(result.dob).toEqual(request.dob)
//     expect(result.phone).toEqual(request.phone)
//     expect(result.eventsAttended).toEqual(request.eventsAttended)
//     expect(result.account_open_on).toEqual(request.account_open_on)
//   })
  
  
  test('Updating a user in the database', async() => {
    const name = "Mohamed Msh Mahrous"
    const response = await funcs.updateUser('5c93cd1f1c9fe35274d2f624',name)
    expect(response.name).toEqual(name)
  });


  
