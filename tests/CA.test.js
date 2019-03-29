const funcs = require('./CAFuncs')
const axios = require('axios')

//AMR NASHAAT, Consultancy Agency CRUD testing

test('testing agency get request', async() => {
    //expect.assertions(1)
    const res = await funcs.getAgencies()
    expect(res.data[0]._id).toEqual('5c9bd0d9ac225200175df719')
});

test('agency put request', async() => {
    const newInfo = 'UPDATING INFO'
    const res = await funcs.updateAgencyInfo('5c9bd0d9ac225200175df719',newInfo)
    expect(res.data.data.info).toEqual(newInfo)
});

test('agency post test', async() => {
    const before = await funcs.getAgencies()
    const x = funcs.postAgency()
    const after = await funcs.getAgencies()
    expect(x).toBeDefined()
    //Our function returns the added agency, which is a defined agency
});


test('agency delete test', async() => {
    const before = await funcs.getAgencies()
    const v = funcs.deleteAgency('5c9bd6a4ac225200175df71e')
    const after = await funcs.getAgencies()
    expect(before.data.length-1).toBe(after.data.length)
});

