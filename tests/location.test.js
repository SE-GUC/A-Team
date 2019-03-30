const funcs = require('./Locationfunctions');
const axios = require('axios')




test('Testing get req', async () => {
    const loc = await funcs.getLocation();
    expect(loc.data.data[0]._id).toBe('5c9bff7f569b9a001796d40a') });
  

test('Location delete test', async() => {
        const before = await funcs.getLocation();
        const v =  await funcs.deleteLocation('mangaTwo3');
        const after = await funcs.getLocation();
        expect(before.data.length).toBe(after.data.length)

    });
test('Location post test', async() => {
        const before = await funcs.getLocation()
        const x = funcs.postLocation()
        const after = await funcs.getLocation()
        expect(x).toBeDefined()
        
    });
    
    
    
test('Location changing capacity', async() => {
        const newInfo = 20
        const res = await funcs.updateLocationcapacity('5c9cad9507d1740017bdb25c',newInfo)
        expect(res.data.info).toEqual(res.data.newInfo)
    }); 
    
test('Location changing title', async() => {
    const newInfo = 'title-updating'
    const res = await funcs.updateLocationInfo('5c9cc1df0fb0b90a80c37cd1',newInfo)
    expect(res.data.info).toEqual(res.data.newInfo)
});


test('Location change booking', async() => {
    const newInfo = "update booking"
    const res = await funcs.updateLocationBooking('5c9bffa8569b9a001796d40d',newInfo)
    expect(res.data.info).toEqual(res.data.newInfo)
});


    

//To run the tests,
//type: npm run test
//Goodluck;)