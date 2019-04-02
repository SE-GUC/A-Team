const funcs = require('./taskFunc');


const axios = require('axios')


test('adds 1 + 2 to be 3', () => {
  expect(funcs.add(1, 2)).toBe(3);
});



test('expected review to be in DB', async()=>{
    const expectMsg = 'Task was found and reviewed'
    const result = await funcs.Review('5c9b9bbf69bb9e0017b86e6f','true')
    expect(result).toBe(expectMsg)


});



test('feedback on event story 2.11', async()=>{
    
    const expectMsg = 'Error, couldnt vote for a event given the following data'
    const res = await funcs.eventfeedback('5c9e3446559ed00017ece5ec','5c93cd1f1c9fe35274d2f624','tamaaaam', 2)
    const allEvents= await funcs.getEvents();
    const x ={
        user_id: '5c93cd1f1c9fe35274d2f624',
        comment: 'tamaaaam',
        rate: 2
      }

   expect(allEvents.data.data[0]._id).toEqual('5c93b78f1d4b8e5b48557ba0')
   //expect(allEvents.data.data[1].feedbacks.length).toEqual(1)
   
});

