import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble, FiInstagram} from "react-icons/fi"
function Headersocials() {
  return (
    <div className='header__socials'>
<a href='https://www.linkedin.com/in/baraneeswaran-a-8ab912226/' target='_blank'>
    <BsLinkedin/>
</a>
<a href='https://github.com/BARANEESWARAN' target='_blank'>
    <FaGithub/>
</a>
<a href='https://www.instagram.com/barani_anandh/' target='_blank'>
    {/* <FiDribbble/> */}
    <FiInstagram/>
</a>
    </div>
  )
}

export default Headersocials