import React from 'react'
import "../Contact/contact.css"
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  const form=useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u6gk3r8', 'template_gp9u53h', form.current, 'qyTlvsVsPHswMwL8h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };








  return (
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>

<div className='container contact__container'>
  <div className='contact__options'>
<article className='contact__option'>
<MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>baranees1@gmail.com</h5>
<a href='mailto:baranees1@gmail.com'  target='_blank'>Send a message</a>
</article>
<article className='contact__option'>
<RiMessengerLine className='contact__option-icon'/>
<h4>Messenger</h4>
<h5>barani_anandh</h5>
<a href='https://www.facebook.com/messages/t/100009984880059'  target='_blank'>Send a message</a>
</article>
<article className='contact__option '>
<BsWhatsapp className='contact__option-icon'/>
<h4>Whatsapp</h4>
<h5>+1234567890</h5>
<a  href="https://api.whatsapp.com/send?phone=919790252548" target="_blank">Send a message</a>
</article>


  </div>
{/* 
<---------------form-----------> */}

<form ref={form} onSubmit={sendEmail}>
<input type='text' name="name" placeholder='Your Full Name' required/>
<input type='email' name="email" placeholder='Your Email' required/>
<textarea  name="message" rows="7" placeholder='Message' required/>

<button type='submi' className='btn btn-primary'>Send Message</button>


</form>





</div>









    </section>
  )
}

export default Contact