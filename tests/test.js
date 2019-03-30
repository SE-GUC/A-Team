const funcs = require('./functions')
const axios = require('axios')

test('testing notifs get request', async() => {
    const res = await funcs.getNotifs('5c9d590045d44777a0928fdf')
    expect(res.notifications[0]).toEqual('5c9b9bbf69bb9e0017b86e6f')
});



test('notif post request', async() => {
    const before = await funcs.getNotifs()
    const res = await funcs.postNotif('5c9d591745d44777a0928fe0','5c9ba3e069bb9e0017b86e72')
    const after=await funcs.getNotifs()
    expect(res).toBeDefined();
}); 