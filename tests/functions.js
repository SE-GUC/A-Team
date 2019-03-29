const axios = require('axios')

const functions={
    login: async() => {
        return axios({
            method:'post',
            url: 'https://ateamse.herokuapp.com/api/users/login/',
            headers: {'Content-Type': 'application/json'},
            data: {
                email:'lifelianghje@gmail.com',
                password:'$2a$10$HXZYAHvmB1DZxa0Mph7.X.nAeuognJstfvAxDA/RJDvwfrdHHOcPK'
            }
        });
    },
    
}

module.exports=functions;
