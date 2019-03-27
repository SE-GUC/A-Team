/**
 * @jest-environment node
 */
const funcs = require('./projFuncs');

test('adds 1 + 2 to be 3', () => {
  expect(funcs.add(1, 2)).toBe(3);
});
test('expected values ti be in DB',async()=>{
  expect.assertions(1)
  const result = await funcs.getproject()
  const res_json=result.data.data
  expect(res_json._id).toEqual('5c9b3d2a6c59bf0017b4a481')
  expect(res_json._id).toHaveLength(24)

})

