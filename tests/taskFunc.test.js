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