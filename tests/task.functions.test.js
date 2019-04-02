const funcs = require('./task.functions')
const axios = require('axios')

//AMR NASHAAT, Task's CRUD testing, and Story 1.3 testing(Viewing a task's specific desc)
test('testing get request', async() => {
    expect.assertions(1)
    const response = await funcs.getTasks()
    expect(response.data[0]._id).toHaveLength(24)
});
test('testing task put request', async() => {
    const desc = 'TESTING UPDATE NOW'
    const response = await funcs.updateTaskDesc('5c9b9bbf69bb9e0017b86e6f',desc)
    expect(response.data.data.description).toEqual(desc)
});
test('testing task delete', async() => {
    const before = await funcs.getTasks() //4
    funcs.deleteTaskDesc('5c9bbacd4b73cd0017ada9d5')
    const after = await funcs.getTasks() //3
    expect(before.data.length-1).toBe(after.data.length)
});
//Post test won't work with delete, since the condition will become wrong, since we post/delete at the same time.
//However they both work!
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
test('testing to update assign_id',async()=>{
  const result= await funcs.updateassignid();
  expect(result.is_assigned).toBe("true");
  expect(result.assigned_id).toBe("5c9b9bbf69bb9e0017b86e6f");
});
test('testing view  all applicants',async() => {
  const applicants = '[ ]'
  const m = await funcs.getTaskDesc('5c9bca0bac225200175df711')
  expect(m.data[0]).toEqual(applicants)
});
test("Shalaby's 1.1 - Create Method", async()=>{
    const result= await funcs.shalabyCTask();
    const expec={
        name:'Trappin up the Bando',
        monetary_compensation: '600',
        price:'1233',
        time_expected:'6 Days',
        level_of_comitment:'High',
        experience_needed:'3.5 Years',
        description:'I feel most alive when im approaching my death',
        p_id:undefined,
        skills:["Bloodhound","Wraith","Octane"],
        applicants:[],
        time_of_assingment:'',
        is_assigned:false,
        is_reviewed:false,
        time_of_review:''
    }
    const res=result.data.data 
    expect(result).toBeDefined()
    expect(res._id).toHaveLength(24)
    expect(res.name).toBe(expec.name)
    expect(res.monetary_compensation).toEqual(600)
    expect(res.price).toBe(1233)
    expect(res.time_expected).toBe(expec.time_expected)
    //expect(res.time_expected).toContain('Days' ||'Months' ||'Years' || 'Day' || 'Month' || 'Year' || 'Hours'||'days' ||'months' ||'years' || 'day' || 'month' || 'year' || 'hours')
    expect(res.experience_needed).toBe(expec.experience_needed)
    //expect(res.time_expected).toContain('days' ||'months' ||'years' || 'day' || 'month' || 'year' || 'hours' ||'Days' ||'Months' ||'Years' || 'Day' || 'Month' || 'Year' || 'Hours')
    expect(res.level_of_comitment).toBe(expec.level_of_comitment)
    expect(res.skills).toHaveLength(expec.skills.length)
    expect(res.applicants).toHaveLength(0)
    expect(res.time_of_assingment).toBeNull()
    expect(res.time_of_review).toBeNull()
    expect(res.is_assigned).toBeFalsy()
    expect(res.is_reviewed).toBeFalsy()
});


