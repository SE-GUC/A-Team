const funcs = require("./Epic1funcs");
test("If I have the same skills and even more", async () => {
  const sent = ["Bloodhound", "Wraith", "Octane", "messi"].sort();
  const result = await funcs.RecommendNormalUpperCase();
  const arrayOfTasks = result.data;
  for(var i=0;i<arrayOfTasks.lenght;i++){
      expect(arrayOfTasks[i].skills.sort()).toEqual(sent)
  }
});
test("If The Skills are there (case sensetive)", async () => {
  const sent = ["Bloodhound", "Wraith", "Octane"];
  const result = await funcs.RecommendNormalLowerCase();
  for(var i=0;i<arrayOfTasks.lenght;i++){
    expect(arrayOfTasks[i].skills.sort()).toEqual(sent)
}
});
test("If I have no Skills", async () => {
  const sent = [];
  const result = await funcs.RecommendNoSkills();
  const arrayOfTasks = result.data;
  expect(arrayOfTasks).toEqual(sent);
});
test("If i don't have enough skills", async () => {
  const sent = ["Wraith"];
  const result = await funcs.RecommendNoSkills();
  const arrayOfTasks = result.data;
  expect(arrayOfTasks).toEqual([]);
});
