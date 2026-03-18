const router = require("express").Router();
const Resume = require("../models/Resume");

router.post("/create", async(req,res)=>{
const resume = new Resume(req.body);
await resume.save();
res.json(resume);
});

router.get("/all", async(req,res)=>{
const data = await Resume.find();
res.json(data);
});

module.exports = router;