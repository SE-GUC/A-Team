const express = require("express");
const router = express.Router();
const Skills = require("../../models/Skills");
const joi = require("joi");

router.post("/addSkill", async (req, res) => {
  const status = joi.validate(req.body, {
    skill: joi
      .string()
      .min(3)
      .required()
  });
  if (status.error) {
    return res.json({
      error: status.error.details[0].message
    });
  }
  const skill = req.body.skill.toLowerCase();
  try {
    const exist = await Skills.findOne({ skill });
    if (exist) {
      return res.json({ error: "Skill " + exist.skill + " Already Exists" });
    }
    const newSkill = await new Skills({
      skill: skill
    }).save();
    return res.json({
      data: newSkill
    });
  } catch (err) {
    console.log(err.message);
    return res.json({
      error: `Error, couldn't create a new Task with the following data`
    });
  }
});
router.delete("/delete/:skill", async (req, res) => {
  const skillq = req.params.skill.toLowerCase();
  try {
    const exists = await Skills.findOne({ skill: skillq });
    if (exists === null) {
      return res.json({ message: "There is No " + skillq + " Skill" });
    }
    console.log(exists);
    const id = exists._id;
    Skills.findByIdAndDelete(id, (err, model) => {
      if (!err) {
        return res.json({
          data: null
        });
      } else {
        return res.json({
          error: "Error, cant delete"
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.json({ eror: "Request Error" });
  }
});
router.get("/getSkill", async (req, res) => {
  try {
    const t = await Skills.find();
    res.json({
      data: t
    });
  } catch (err) {
    return res.json({ erorr: "Request Erorr" });
  }
});
router.get("/getSkillCollection", async (req, res) => {
  try {
    const t = await Skills.find()
    const array =[]
    for(var i=0;i<t.length;i++){
      array.push(t[i].skill)
    }

    return res.json({
      data: array
    });
  } catch (err) {
      console.log(err)
    return res.json({ erorr: "Request Erorr" });
  }
});

module.exports = router;
