/**
 * @jest-environment node
 */
const funcs= require('./tests')
const axios = require('axios')
//main
test('adds 1 + 2 to be 3 quik maths', () => {
    expect(funcs.add(1, 2)).toBe(3);
  });

 test('gets event requests', async()=> {
     const eventrequests= await funcs.geteventrequests()
     //console.log(eventrequests.data[0])
     expect(eventrequests.data[0]._id).toBe('5c9d053a9e6ebe00179d356c')
 });

test('updates organizer', async()=>{
    const response = await funcs.update()
    //console.log(response.data)
    // expect(response.data.data._id).toBe('5c9d053a9e6ebe00179d356c')
    expect(response.data.data.organizer).toBe('youssef shalaby')
});
// test('deletes ', async()=>{
//     const beforedeletion= await funcs.geteventrequests()
//     const deletion= await funcs.deleteeventrequest()
//     const afterdeletion= await funcs.geteventrequests()
//     expect(beforedeletion.data.length-1).toBe(afterdeletion.data.length)
// })
test('adds request', async()=>{
    //const beforeaddition= await funcs.geteventrequests()
    const addition= await funcs.testa()
    const expe= {
        organizer:'hooda bondo2',
        isAccepted:'false'
}
    //const afteraddition= await funcs.geteventrequests()
    expect(addition).toBeDefined()
    console.log(addition.data)
    expect(addition.data.organizer).toBe(expe.organizer)
    expect(addition.data.data._id).toHaveLength(24)
    expect(addition.data.data.isAccepted).toBe(expe.isAccepted)
})