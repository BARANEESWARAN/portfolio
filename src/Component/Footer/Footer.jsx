import React from 'react'
import "../Footer/footer.css"
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
   <footer>
<a href='#' className='footer__logo'>MC BOY</a>

<ul className='mysocial_links'>
<li>
  <a href='#'>Home</a>
</li>
<li>
  <a href='#about'>About</a>
</li>
<li>
  <a href='#experience'>Experience</a>
</li>
{/* <li>
  <a href='#service'>Services</a>
</li> */}
<li>
  <a href='#portfolio'>Portfolio</a>
</li>
{/* <li>
  <a href='#testimonials'>Testimonials</a>
</li> */}
<li>
  <a href='#contact'>Contact</a>
</li>

</ul>

<div className='footer__socials'>

<a href='https://www.facebook.com/baranees.waran.1'>
  <FaFacebook/>
</a>
<a href='https://www.instagram.com/barani_anandh/'>
  <FiInstagram/>
</a>
<a href='#twitter'>
  <BsTwitter/>
</a>



</div>
<div className='footer__copyright'>


  <small>&copy;MC BOY. All rights reserved</small>
</div>

   </footer>
  )
}

export default Footer