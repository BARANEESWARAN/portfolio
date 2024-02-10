import React from 'react'
import "../Header/headerbtns.css"
import CV from "../../assets/cv.pdf"
function Headerbtns() {
  return (
    <div className='cta'>
<a href={CV} download className='btn'>Download CV</a>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Headerbtns