import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/create" element={<ResumeForm/>}/>
<Route path="/preview" element={<ResumePreview/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
</Routes>

<Footer/>

</BrowserRouter>

);

}

export default App;