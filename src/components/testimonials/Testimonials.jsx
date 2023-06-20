import React from 'react' ;
import "./testimonials.css" ;
import CERTIFICADO1 from "../../assets/titulo1.jpg" ;

import {  Pagination  } from 'swiper' ;
import { Swiper, SwiperSlide } from 'swiper/react' ;

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testimonials = () => {
  return (
    <section id="testimonials"> 
    
      <h5>Certificados </h5>
      <h2>Oficiales</h2>

      <div className="container testimonials__container">

        


      <Swiper className="container testimonials_container"
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}     
      >

        <SwiperSlide className='testimonial'>    
            <div className="client__avatar">
                  <img src={CERTIFICADO1} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Full Stack Developer</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo unde, laborum dignissimos voluptas asperiores blanditiis repudiandae nesciunt voluptatem officiis, necessitatibus laboriosam illum, aspernatur animi expedita eum. Voluptatibus, aspernatur sapiente.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>    
            <div className="client__avatar">
                  <img src={CERTIFICADO1} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Full Stack Developer</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo unde, laborum dignissimos voluptas asperiores blanditiis repudiandae nesciunt voluptatem officiis, necessitatibus laboriosam illum, aspernatur animi expedita eum. Voluptatibus, aspernatur sapiente.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>    
            <div className="client__avatar">
                  <img src={CERTIFICADO1} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Full Stack Developer</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo unde, laborum dignissimos voluptas asperiores blanditiis repudiandae nesciunt voluptatem officiis, necessitatibus laboriosam illum, aspernatur animi expedita eum. Voluptatibus, aspernatur sapiente.
          </small>
        </SwiperSlide>

      </Swiper>
      
      
        
      </div>

    </section>
  )
}

export default Testimonials