const funcs = require('./memberfunctions')
	const axios = require('axios')
    
    test('adds 1 + 2 to be 3', () => {
        expect(funcs.add(1, 2)).toBe(3);
      });
	
	
	test('testing member get request', async() => {
	    const res = await funcs.getMember()
	    expect(res).toBeDefined()
    });
     
 test('Member post test', async() => {
    const before = await funcs.getMember()
    const x = funcs.postMember()
    const after = await funcs.getMember()
    expect(x).toBeDefined()
 });

  test('testing Member delete test', async() => {
     const before = await funcs.getMember();
     const v =  await funcs.deleteMember('5c9e4fc4885b2b068b5dc7b8');
     const after = await funcs.getMember();
     expect(before.length).toBe(after.length+1)});

 test('testing Member put request', async() => {
 	const newData = 20
 	const res = await funcs.updateMember('5c9d590045d44777a0928fdf',newData)
     expect(res.data.info).toEqual(res.data.newData)
 });