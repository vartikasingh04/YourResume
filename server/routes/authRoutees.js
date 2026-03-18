const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// REGISTER
router.post("/register", async(req,res)=>{

try{

const hashedPassword = await bcrypt.hash(req.body.password,10);

const user = new User({
email:req.body.email,
password:hashedPassword
});

await user.save();

res.json("User Registered");

}catch(err){
res.status(500).json(err);
}

});


// LOGIN
router.post("/login", async(req,res)=>{

try{

const user = await User.findOne({email:req.body.email});

if(!user){
return res.status(400).json("User not found");
}

const isMatch = await bcrypt.compare(req.body.password,user.password);

if(!isMatch){
return res.status(400).json("Wrong password");
}

const token = jwt.sign(
{id:user._id},
"secretkey",
{expiresIn:"1d"}
);

res.json({token});

}catch(err){
res.status(500).json(err);
}

});

module.exports = router;