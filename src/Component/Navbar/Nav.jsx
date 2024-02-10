import React, { useState } from 'react'
import "../Navbar/nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
function Nav() {
  const[active,setActive]=useState("#")
  return (
  <nav>
    <a href='#' className={active==="#"?'active':""} onClick={()=>setActive("#")}>
      <AiOutlineUser/>
    </a>
    <a href='#about' className={active==="#about"?'active':""} onClick={()=>setActive("#about")}>
    <AiOutlineHome/>
    </a>
    <a href='#experience'  className={active==="#experience"?'active':""} onClick={()=>setActive("#experience")}>
    <BiBook/>
    </a>
    {/* <a href='#service'  className={active==="#service"?'active':""} onClick={()=>setActive("#service")}>
    <RiServiceLine/>
    </a> */}

<a href='#portfolio'  className={active==="#portfolio"?'active':""} onClick={()=>setActive("#portfolio")}>
    <RiServiceLine/>
    </a>
    <a href='#contact'  className={active==="#contact"?'active':""} onClick={()=>setActive("#contact")}>
    <BiMessageSquareDetail/>
    </a>
  </nav>
  )
}

export default Nav