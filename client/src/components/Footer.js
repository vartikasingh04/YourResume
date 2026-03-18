import {Link} from "react-router-dom";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div className="footer-section">
<h3>Resume Builder</h3>
<p>Create professional resumes quickly and easily.</p>
</div>

<div className="footer-section">
<h4>Quick Links</h4>

<Link to="/">Home</Link>
<Link to="/create">Create Resume</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>    

</div>

<div className="footer-section">
<h4>Contact</h4>
<p>Email: support@resumebuilder.com</p>
<p>Phone: +91 9876543210</p>
</div>

</div>

<p className="footer-bottom">
© 2026 YourResume | All Rights Reserved | Designed and Developed by Vartika Singh
</p>

</footer>

);

}

export default Footer;