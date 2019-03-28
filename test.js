const funcs = require('./fn');
const axios = require('axios')




test('Testing get req', async () => {
    const loc = await funcs.getLocation();
    expect(loc.data.data[0]._id).toBe('5c9bff7f569b9a001796d40a') });
  

test('Location delete test', async() => {
        const before = await funcs.getLocation();
        const v =  await funcs.deleteLocation('mangaTwo');
        const after = await funcs.getLocation();
        expect(before.data.length).toBe(after.data.length)

    });
test('Location post test', async() => {
        const before = await funcs.getLocation()
        const x = funcs.postLocation()
        const after = await funcs.getLocation()
        expect(x).toBeDefined()
        //Our function returns the added Location, which is a defined agency
    });
test('Location put request', async() => {
    const newInfo = 'updating'
    const res = await funcs.updateLocationInfo('manga',newInfo)
    expect(res.data.info).toEqual(res.data.newInfo)
});



    

//To run the tests,
//type: npm run test
//Goodluck;)