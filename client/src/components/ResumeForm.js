import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResumeForm() {

const navigate = useNavigate();

const [form, setForm] = useState({
name:"",
email:"",
phone:"",
skills:"",
education:"",
experience:"",
projects:""
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const submit = async()=>{

await axios.post(
"http://localhost:5000/api/resume/create",
form
);

navigate("/preview",{ state: form });

};

return(

<div className="form-container">

<h2>Create Resume</h2>

<input name="name" placeholder="Name" onChange={handleChange}/>
<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="phone" placeholder="Phone" onChange={handleChange}/>
<input name="skills" placeholder="Skills" onChange={handleChange}/>
<input name="education" placeholder="Education" onChange={handleChange}/>
<input name="experience" placeholder="Experience" onChange={handleChange}/>
<input name="projects" placeholder="Projects" onChange={handleChange}/>

<button onClick={submit}>Preview Resume</button>

</div>

);

}

export default ResumeForm;