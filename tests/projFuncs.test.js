/**
 * @jest-environment node
 */
const funcs = require('./projFuncs');

test('adds 1 + 2 to be 3', () => {
  expect(funcs.add(1, 2)).toBe(3);
});
test('expected values ti be in DB',async()=>{
  //expect.assertions(1)
  const result = await funcs.getproject()
  const res_json=result.data.data
  expect(res_json._id).toEqual('5c9b3d2a6c59bf0017b4a481')
  expect(res_json._id).toHaveLength(24)

})
test('Creaates a new Project With a Valid ID', async ()=>{
  //expect.assertions(1)
  const result = await funcs.createProject()
  const expectation={
        //_id:mongoose.Types.ObjectId(),                      //not neeeded at all, should not be tested
        project_name: 'This project was created by jest',                //strictly needed                          //not really needed
      //put here the id passed
        Tasks:[]
  }
  expect(result).toBeDefined()
  expect(result.data.proj.project_name).toEqual(expectation.project_name)
  expect(result.data.proj.Tasks).toHaveLength(0)
  expect(result.data.proj._id).toHaveLength(24)
  expect(result.data.proj.partner_responsible).toHaveLength(24)
  expect(result.data.proj.consultancy_agency_sponsor).toHaveLength(24)
})
test("Updates an existing project",async()=>{
  const result = await funcs.updateProject()
  const expectation={
    id:'5c9b396a6c59bf0017b4a445',
    project_name:'This project was Updated by jest',
    partner_responsible: '5c9b39236c59bf0017b4a442',
    Tasks:[]

  }
  expect(result).toBeDefined()
  expect(result.data.updated.project_name).toEqual(expectation.project_name)
  expect(result.data.updated.partner_responsible).toEqual(expectation.partner_responsible)
})
test("Delete a project",async()=>{
  const result = await funcs.deleteProject()
  const expectation={
    message:'The Project Was Deleted Successfuly'
  }
  expect(result).toBeDefined()
  expect(result.data.message).toEqual(expectation.messsage)
})
test("Added a Task", async()=>{
  const result= await funcs.addTask()
  const expectation={
    taskid:'5c9b9bbf69bb9e0017b86e6f'
  }
  expect(result).toBeDefined()
  expect(result.data.data.Tasks).toContain(expectation.taskid)

})
