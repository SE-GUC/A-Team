const funcs = require('./funcsPartner')
const axios = require('axios')
//partner crud not working properly

test('gets partner list by id', ()=>{
    const e= funcs.getpartners()
    expect(e.data._id).toBe('5c9bd8b7ac225200175df72d')
})

test('post partner list by id', ()=>{
    const before1 = await funcs.getpartner()
    const m = funcs.postpartner()
    const after1 = await funcs.getpartner()
    expect(before.data.length+1).toBe(after.data.length)
})

test('deletes partner', ()=>{
    const before = await funcs.getpartner() 
    funcs.deletePartner('5c9bd8c4ac225200175df72e')
    const after = await funcs.getpartner() 
    expect(before.data.length-1).toBe(after.data.length)
})
test('testing  put request', async() => {
    const id = '5c9bd8b7ac225200175df72d'
    const consultancy_agency_id= '5c9bd8a1ac225200175df72b'
    const response = await funcs.updatepartner(id,consultancy_agency_id)
    expect(response.data.consultancy_agency_id).toEqual(consultancy_agency_id)
});

