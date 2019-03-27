//const express = require('express')
//const router = express.Router()
//const Tasks = require('../../A-Team/routes/api/tasks')
//const mongoose = require('mongoose')
const funcs = require('./functions')
const axios = require('axios')
// const people = [
//     'Ammar',
//     'Leo',
//     'Barney',
//     'Jaime',
//     'Tywin',
//   ];
//   async function getTasksHere ()  {
//     axios
//         .get('https://ateamse.herokuapp.com/api/tasks/read')
//         .then(response => {
//             console.log(response.data)
//             console.log("IM HERE BITCHES")
//             return response


//         })
//         .catch(function(error) {
//             console.log(error)
//         });

// }

test('Add 2 numbers equals 3', () => {
    expect(funcs.add(1,2)).toBe(3);
});

// test('task get request test', async () => {
//     const response = getTasksHere()
//     expect(getTasksHere.data[4]).toEqual('Its only over when its over')
// });


//TASK GET
test('testing get request', async() => {
    expect.assertions(1)
    const response = await funcs.getTasks()
    expect(response.data[0].name).toEqual('OnePointThree')
});
//TASK UPDATE
test('testing task put request', async() => {
  //expect.assertions(1)
    const desc = 'TESTING UPDATE NOW'
    const response = await funcs.updateTaskDesc('5c9b9bbf69bb9e0017b86e6f',desc)
    expect(response.data.data.description).toEqual(desc)
});
//TASK DELETE
test('testing task delete', async() => {
    const before = await funcs.getTasks() //4
    funcs.deleteTaskDesc('5c9bbb584b73cd0017ada9d6')
    const after = await funcs.getTasks() //3
    expect(before.data.length-1).toBe(after.data.length)
});
test('testing task post', async() => {
    const before = await funcs.getTasks()
    funcs.postTask()
    const after = await funcs.getTasks()
    expect(before.data.length+1).toBe(after.data.length)
})




//Create, Read, Delete, Update
