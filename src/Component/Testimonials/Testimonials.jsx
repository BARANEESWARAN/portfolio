import React from 'react'
import "../Testimonials/testimonials.css"
import ava1 from "../../assets/avatar1.jpg"


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
  return (
    <section className='testimonials__container'>
<h5>Review from Clients</h5>
<h2>Testimonials</h2>
      <Swiper
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
 
       pagination={{ clickable: true }}
      
   
     >
<SwiperSlide className='testimonial'>
  <div className='client__avatar'>
    <img src={ava1} alt="profile"/>
  </div>
  <h5 className='client__name'>Barani</h5>
  <small className='client__review'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa eius natus consequatur ex? Nam quidem voluptas 
      numquam excepturi illum.
    </small>
    </SwiperSlide>




    <SwiperSlide className='testimonial'>
  <div className='client__avatar'>
    <img src={ava1} alt="profile"/>
  </div>
  <h5 className='client__name'>Barani</h5>
  <small className='client__review'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa eius natus consequatur ex? Nam quidem voluptas 
      numquam excepturi illum.
    </small>
</SwiperSlide>
<SwiperSlide className='testimonial'>
  <div className='client__avatar'>
    <img src={ava1} alt="profile"/>
  </div>
  <h5 className='client__name'>Barani</h5>
  <small className='client__review'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa eius natus consequatur ex? Nam quidem voluptas 
      numquam excepturi illum.
    </small>
</SwiperSlide>


</Swiper>

     </section>
  )
}

export default Testimonials