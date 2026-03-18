import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumePreview(){

const location = useLocation();
const data = location.state;

const downloadPDF = () => {

const input = document.getElementById("resume");

html2canvas(input).then((canvas)=>{

const imgData = canvas.toDataURL("image/png");

const pdf = new jsPDF();

pdf.addImage(imgData,"PNG",0,0);

pdf.save("resume.pdf");

});

};

return(

<div>

<div id="resume" className="resume-container">

<div className="resume-header">
<h1>{data?.name}</h1>
<p>{data?.email} | {data?.phone}</p>
</div>

<div className="resume-section">
<h3>Skills</h3>
<p>{data?.skills}</p>
</div>

<div className="resume-section">
<h3>Education</h3>
<p>{data?.education}</p>
</div>

<div className="resume-section">
<h3>Experience</h3>
<p>{data?.experience}</p>
</div>

<div className="resume-section">
<h3>Projects</h3>
<p>{data?.projects}</p>
</div>

</div>

<button className="download-btn" onClick={downloadPDF}>
Download PDF
</button>

</div>

);

}

export default ResumePreview;