import React from 'react'
import "../Portfolio/portfolio.css"
import { PortfolioData } from './PortfolioData'
import img1 from "../../assets/portfolio1.jpg"
import img2 from "../../assets/portfolio2.jpg"
import img3 from "../../assets/portfolio3.jpg"
import img4 from "../../assets/portfolio4.jpg"
import img5 from "../../assets/portfolio5.png"
import img6 from "../../assets/portfolio6.jpg"
function Portfolio() {
 
  return (
    <section id='portfolio'>

<h5>My Recent Work</h5>
<h2>Portfolio</h2>
<div className='container portfolio__container'>
{
  PortfolioData.map((Portfolio)=>{

    const {title,id,image,github,demo}=Portfolio
return(

  <article className='portfolio__item' key={id}>
<div className='portfolio__item-image'>
  <img src={image} alt="project"/>

</div>
<h3>{title}</h3>
<div className='portfolio__item-btns'>
<a href={github} className='btn' target='_blank'>Github</a>
<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

</div>


</article>
)

  })
}








</div>















    </section>
  )
}

export default Portfolio
