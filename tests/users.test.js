    

/**
 * @jest-environment node
 */
const funcs = require('./usersFuncs');

test('First user is Tessa', async () => {
    const response =  await funcs.getEvents()
    expect(response.data.data[0].name).toBe("Tessa")
});