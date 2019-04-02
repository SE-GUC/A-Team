const funcs = require('./assignMemberTest')
const axios = require('axios')

test('test post', async() => {
    const res= await funcs.assign('5c9bcbbfac225200175df717','5c9f77f1eb03d32c84acf7b7')
    expect(res).toBeDefined();
});