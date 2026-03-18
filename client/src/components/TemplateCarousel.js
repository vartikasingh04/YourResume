import "./templateCarousel.css";

function TemplateCarousel(){

const templates = [
{
id:1,
title:"Modern Resume",
image:"https://i.imgur.com/8Km9tLL.png"
},
{
id:2,
title:"Professional Resume",
image:"https://i.imgur.com/YZ6FZ6E.png"
},
{
id:3,
title:"Creative Resume",
image:"https://i.imgur.com/mK3M7L3.png"
},
{
id:4,
title:"Minimal Resume",
image:"https://i.imgur.com/4R9LZ9R.png"
}
];

return(

<div className="template-section">

<h2 className="template-title">Resume Templates</h2>

<div className="template-carousel">

{templates.map((template)=>(
<div className="template-card" key={template.id}>

<img src={template.image} alt="template"/>

<h3>{template.title}</h3>

<button className="use-template">
Use Template
</button>

</div>
))}

</div>

</div>

);

}

export default TemplateCarousel;