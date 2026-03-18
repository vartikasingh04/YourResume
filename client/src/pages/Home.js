import { Link } from "react-router-dom";
import TemplateCarousel from "../components/TemplateCarousel";

function Home(){

return(

<div>

<div className="hero">

<h1>Create Professional Resume YourResume</h1>

<p>Build a resume in minutes</p>

<Link to="/create">
<button>Create Your Resume</button>
</Link>

</div>

<TemplateCarousel/>

</div>

);

}

export default Home;