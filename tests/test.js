const funcs = require('./functions')
const axios = require('axios')

//partner crud
test('testing partner get request', async() => {
    //expect.assertions(1)
    const response = await funcs.getPartner()
    expect(response.data[0]._id).toEqual('5c9d053a9e6ebe00179d356c')
});
test('testing partner put request', async() => {
    const organizer = 'new organizer'
    const id = '5c9d053a9e6ebe00179d356c'
    const response = await funcs.updatePartner(id,organizer)
    expect(response.data.organizer).toEqual(organizer)
});
test('testing partner delete', async() => {
    const before = await funcs.getPartner() 
    funcs.deletePartner('5c9d08389e6ebe00179d3575')
    const after = await funcs.getPartner() 
    expect(before.data.length-1).toBe(after.data.length)
});
test('testing partner post', async() => {
    const before1 = await funcs.getPartner()
    const m = funcs.postPartner()
    const after1 = await funcs.getPartner()
    expect(m).toBeDefined()
});
//1.5
