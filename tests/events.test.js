
/**
 * @jest-environment node
 */

const funcs = require('./eventFunctions');

test('First event remaining places should equal 12', async () => {
    const response =  await funcs.getEvents()
    expect(response.data.data[0].remaining_places).toBe(12)
});
test('Creating an event test',async ()=>{
  const result = await funcs.createEvent()
  const request={
        remaining_places: 250,
        location: "5c9bff7f569b9a001796d40a",
        about: "MERN Programming Style",
        price: 55,
        speakers: ["Absalam", "Bill Gates"],
        topics: ["Python", "Java"],
        type: "Computer Engineering",
        partnerInitiated: "5c93cd1f1c9fe35274d2f624",
        request:"5c93cd1f1c9fe35274d2f624",
        attendees: ["5c93cd1f1c9fe35274d2f624","5c93cd1f1c9fe35274d2f624"]
  }
  expect(result).toBeDefined()
  expect(result.remaining_places).toEqual(request.remaining_places)
  expect(result.location).toEqual(request.location)
  expect(result.about).toEqual(request.about)
  expect(result.price).toEqual(request.price)
  expect(result.speakers).toEqual(request.speakers)
  expect(result.topics).toEqual(request.topics)
  expect(result.type).toEqual(request.type)
  expect(result.partnerInitiated).toEqual(request.partnerInitiated)
  expect(result.request).toEqual(request.request)
  expect(result.attendees).toEqual(request.attendees)
})


test('Updating an event in the database', async() => {
  const remaining_places = 122
  const response = await funcs.updateEvent('5c93b78f1d4b8e5b48557ba0',remaining_places)
  expect(response.remaining_places).toEqual(remaining_places)
});



