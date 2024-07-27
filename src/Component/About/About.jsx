import React from 'react'
import "../About/about.css"
import {FaAward} from "react-icons/fa"
import Me from "../../assets/me-about.jpg"
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
function About() {
  return (
    <section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className='container about__container'>
{/* 
<--------About left------> */}
<div className='about__me'>
<img src={Me} alt="me" className='about__me-img'/>


</div>
{/* 
<--------About right------> */}
<div className='about__content'>


<div className='about__cards'>
<article className='about__card'>
    <FiUser className="about__icon"/>
    <h5>Frontend Developer</h5>
    {/* <small>Frontend Developer</small> */}
  </article>
  <article className='about__card'>
    <FaAward className="about__icon"/>
    <h5>Experience</h5>
    <small>1.8+ years Working</small>
  </article>

  <article className='about__card'>
    <VscFolderLibrary className="about__icon"/>
    <h5>Projects</h5>
    <small>10+ Completed</small>
  </article>
</div>

<p>As an innovative React JS Developer with 1.6 years of experience building scalable and responsive
web applications, I am adept at collaborating with cross-functional teams to drive innovation and
deliver software products that exceed client expectations. I am now seeking a challenging role in a
dynamic organization where I can apply my skills and expertise to drive business growth and achieve
professional success.
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>






</div>



</div>

    </section>
  )
}

export default About
