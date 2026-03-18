const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({

name:String,
email:String,
phone:String,
skills:String,
education:String,
experience:String,
projects:String

});

module.exports = mongoose.model("Resume",ResumeSchema);