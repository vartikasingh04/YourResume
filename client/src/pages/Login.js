import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

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

const res = await axios.post(
"http://localhost:5000/api/auth/login",
form
);

// ✅ Save user/token (important)
localStorage.setItem("user", JSON.stringify(res.data));

// ✅ Redirect after login
navigate("/");

}catch(err){
alert("Invalid email or password");
}
};

return(

<div className="form-container">

<h2>Login</h2>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<button onClick={submit}>
Login
</button>
<p>
Don't have an account?
<span onClick={()=>navigate("/register")}> Register</span>
</p>
</div>

);

}

export default Login;