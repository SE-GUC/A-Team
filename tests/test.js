const funcs = require('./functions')
const axios = require('axios')
test('login post test', async() => {
    const x = funcs.login()
    expect(x).toBeDefined()

});