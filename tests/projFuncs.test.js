const funcs = require('./projFuncs');

test('adds 1 + 2 to be 3', () => {
  expect(funcs.add(1, 2)).toBe(3);
});
test('expect value with same table name', async ()=>{
  const result = await funcs.createProject()
  const expectation={
        _id:mongoose.Types.ObjectId(),                      //not neeeded at all, should not be tested
        project_name: req.body.project_name,                //strictly needed
        date_Posted: new Date(),                            //not really needed
        partner_responsible: mongoose.Types.ObjectId(),     //put here  the if passed
        consultancy_agency_sponsor:mongoose.Types.ObjectId(), //put here the id passed
        Tasks:[]
  }
  expect(result.data.length).toBe(1)
  expect(result.data.project_name).toEqual(expectation.project_name)
  expect(result.data.partner_responsible).toEqual(expectation.partner_responsible)
  expect(result.data.consultancy_agency_sponsor).toEqual(expectation.consultancy_agency_sponsor)
  expect(result.data.Tasks).toHaveLength(0)
  expect(result.data._id).toHaveLength(24)
  expect(result.data.partner_responsible).toHaveLength(24)
  expect(result.data.consultancy_agency_sponsor).toHaveLength(24)
})

