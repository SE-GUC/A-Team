const axios = require("axios");
const functions = {
  RecommendNormalUpperCase: async () => {
    return axios({
      method: "get",
      url: "https://ateamse2.herokuapp.com/api/tasks/recommend",
      headers: { "Content-Type": "application/json" },
      data: {
        skills: ["Bloodhound", "Wraith", "Octane", "messi"]
      }
    });
  },
  RecommendNormalLowerCase: async () => {
    return axios({
      method: "get",
      url: "https://ateamse2.herokuapp.com/api/tasks/recommend",
      headers: { "Content-Type": "application/json" },
      data: {
        skills: ["Bloodhound", "Wraith", "Octane"]
      }
    });
  },
  RecommendNoSkills: async () => {
    return axios({
      method: "get",
      url: "https://ateamse2.herokuapp.com/api/tasks/recommend",
      headers: { "Content-Type": "application/json" },
      data: {
        skills: []
      }
    });
  },
  RecommendNotEnough: async () => {
    return axios({
      method: "get",
      url: "https://ateamse2.herokuapp.com/api/tasks/recommend",
      headers: { "Content-Type": "application/json" },
      data: {
        skills: ['Wraith']
      }
    });
  }

};
module.exports=functions