const funcs = require('./Locationfunctions');
const axios = require('axios')



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
test(
    "Get all Locations",
    async () => {
      expect.assertions(1);
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   test('Deleting a location', async() => {
          const before = await funcs.getLocation();
          await funcs.deleteLocation(before.data.data[0]._id);
          const after = await funcs.getLocation();
          expect(before.data.data).not.toEqual(
          expect.arrayContaining([expect.objectContaining(after.data.data)])
           );
   });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   test('Location post test', async() => {
//           const before = await funcs.getLocation()
//           const x = funcs.postLocation()
//           const after = await funcs.getLocation()
//           expect(x).toBeDefined()
        
//       });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
test(
    "Create a Location",
    async () => {
      expect.assertions(1);
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      
    
    

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
test('Locaticon change booking', async() => {
    const newbooked = "update booking"
    const Locations = await funcs.getLocation();
    console.log(Locations.data.data[0]._id)
    const res = await funcs.updateLocationBooking(Locations.data.data[0]._id,Locations.data.data[0].title,Locations.data.data[0].subtitle,Locations.data.data[0].location,Locations.data.data[0].capacity, newbooked)
    expect(res.data.title).toEqual(res.data.title)
    expect(res.data.subtitle).toEqual(res.data.subtitle)
    expect(res.data.location).toEqual(res.data.location)
    expect(res.data.capacity).toEqual(res.data.capacity)
    expect(res.data.booked).toEqual(res.data.newbooked)
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
  


    

