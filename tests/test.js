
const funcs = require('./functions')
const axios = require('axios')

//AMR NASHAAT, Task's CRUD testing, and Story 1.3 testing(Viewing a task's specific desc)
test('testing get request', async() => {
    expect.assertions(1)
    const response = await funcs.getTasks()
    expect(response.data[0].name).toEqual('OnePointThree')
});
test('testing task put request', async() => {
    const desc = 'TESTING UPDATE NOW'
    const response = await funcs.updateTaskDesc('5c9b9bbf69bb9e0017b86e6f',desc)
    expect(response.data.data.description).toEqual(desc)
});
test('testing task delete', async() => {
    const before = await funcs.getTasks() //4
    funcs.deleteTaskDesc('5c9bbb584b73cd0017ada9d6')
    const after = await funcs.getTasks() //3
    expect(before.data.length-1).toBe(after.data.length)
});
test('testing task post', async() => {
    const before = await funcs.getTasks()
    funcs.postTask()
    const after = await funcs.getTasks()
    expect(before.data.length+1).toBe(after.data.length)
});
test('testing viewing task desc, story1.3',async() => {
    const desc = 'TESTING ONEP3'
    const m = await funcs.getTaskDesc('5c9bca0bac225200175df711')
    expect(m.data).toEqual(desc)
});



