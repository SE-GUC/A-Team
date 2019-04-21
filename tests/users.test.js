
/**
 * @jest-environment node
 */

const funcs = require('./userFuncs');
const funcs2 = require('./eventFunctions');

test('First event remaining places should equal 12', async () => {
    const response =  await funcs.getUsers()
    expect(response.data[0].name).toBe("Tessa")
});

test('Creating a user test',async ()=>{
  const result = await funcs.createUser()
  const name="Tessa"
  expect(result).toBeDefined()
  expect(result.name).toEqual(name)
})


test('Updating a user in the database', async() => {
  const name = 'Tessa'
  const response = await funcs.updatedUser('5c93d2a91c9fe35274d2f625',name)
  expect(response.name).toEqual(name)
});

test("Deletes a user",async()=>{
    const result = await funcs.deleteUser('5c9e8dc52d814000175cb808')
    
    expect(result.data.data).toEqual(null)
  })
  

  test('add event to user',async()=>{
    const response= await funcs.addEventIAttended('5cae2d049cd95a5754daa7e4', '5cadbf76f0282229d89e7bd4')
    const allUsers= await funcs.getUsers();
    console.log(allUsers.data.data[0])
    expect(response.events_attended.length).toBe(allUsers.data.data[0].events_attended.length)
  })
  
