const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/resumeBuilder")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const resumeRoutes = require("./routes/resumeRoutes");

app.use("/api/resume",resumeRoutes);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});


