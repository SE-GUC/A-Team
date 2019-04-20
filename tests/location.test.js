const funcs = require('./Locationfunctions');
const axios = require('axios')




test(
    "Get all Locations",
    async () => {
      const Locations = await funcs.getLocation();
      expect(Locations.data.data).toEqual(
          expect.arrayContaining([
          expect.objectContaining({
              
              _id: expect.any(String),
              title: expect.any(String),
              subtitle: expect.any(String),
              location: expect.any(String),
              capacity: expect.any(Number),
              booked: expect.any(String)
                          })
          ])
        );
      
    },
   
  );


   test('Deleting a location', async() => {
          const before = await funcs.getLocation();
          await funcs.deleteLocation(before.data.data[0]._id);
          const after = await funcs.getLocation();
          expect(before.data.data).not.toEqual(
          expect.arrayContaining([expect.objectContaining(after.data.data)])
           );
   });

//   test('Location post test', async() => {
//           const before = await funcs.getLocation()
//           const x = funcs.postLocation()
//           const after = await funcs.getLocation()
//           expect(x).toBeDefined()
        
//       });
test(
    "Create a Location",
    async () => {
      
      const locations = await funcs.postLocation({
        title:'test',
        subtitle:'test',
        location:'test',
        capacity:2000,
        booked:'test'
          });
      const location = await funcs.getLocation();
      expect(location.data.data).toEqual(
        expect.arrayContaining([expect.objectContaining(locations.data.data)])
      );
    },
    
  );



      
    
    
// test('Location changing capacity', async() => {
//         const newInfo = 100
//         const res = await funcs.updateLocationcapacity('5ca92cef8140653810cfbf1e',newInfo)
//         expect(res.data.info).toEqual(res.data.newInfo)
//     }); 
    
// test('Location changing title', async() => {
//     const newInfo = 'title-updating'
//     const res = await funcs.updateLocationInfo('5ca92cef8140653810cfbf1e',newInfo)
//     expect(res.data.info).toEqual(res.data.newInfo)
// });


// test('Locaticon change booking', async() => {
//     const newInfo = "update booking"
//     const res = await funcs.updateLocationBooking('5ca92cef8140653810cfbf1e',newInfo)
//     expect(res.data.info).toEqual(res.data.newInfo)
// });


// test('new location creation',() => {
//     expect(funcs.createlocation()).toEqual({
//         title:'test',
//         location:'test',
//         capacity:2000,
//         booked:"test"
// });
 
  


    
// })
