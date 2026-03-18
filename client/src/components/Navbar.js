import {Link} from "react-router-dom";

function Navbar(){

return(

<div className="navbar">

<h2>YourResume</h2>

<div className="nav-links">
<Link to="/">Home</Link>
<Link to="/create">Create Resume</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</div>

</div>

);

}

export default Navbar;