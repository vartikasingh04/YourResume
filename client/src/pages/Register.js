import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; 

function Register(){

const navigate = useNavigate();

const [form,setForm] = useState({
email:"",
password:""
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const submit = async(e)=>{
e.preventDefault();

try{

await axios.post(
"http://localhost:5000/api/auth/register",
form
);

alert("Registration Successful");

navigate("/login");

}catch(err){
alert("User already exists or error occurred");
}

};

return(

<div className="register-container">

<form className="register-box" onSubmit={submit}>

<h2>Register</h2>

<input
type="email"
name="email"
placeholder="Enter Email"
onChange={handleChange}
required
/>

<input
type="password"
name="password"
placeholder="Enter Password"
onChange={handleChange}
required
/>

<button type="submit">
Register
</button>

<p>
Already have an account? 
<span onClick={()=>navigate("/login")}>
 Login
</span>
</p>

</form>

</div>

);

}

export default Register;