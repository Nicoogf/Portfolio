import React from 'react' ;
import "./testimonials.css" ;
import logoPhotoshop from "../../assets/logo_photoshop.jpg" ;
import logoPostman from "../../assets/logo_postman.jpg" ;
import logoXamp from "../../assets/logo_xamp.jpg" ;
import logoGit from "../../assets/logo_git.jpg" ;

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
    
      <h5> Herramientas </h5>
      <h2> Adicionales </h2>

      <div className="container testimonials__container">

        


      <Swiper className="container testimonials_container"
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}     
      >

        <SwiperSlide className='testimonial'>    
            <div className="client__avatar">
                  <img src={logoPhotoshop} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Adobe Photoshop</h5>
          <small className='client_review'>
            Reconocido editor de fotografías usado principalmente para el retoque de fotografías y gráficos
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>    
            <div className="client__avatar">
                  <img src={logoPostman} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Postman</h5>
          <small className='client_review'>
            Plataforma API para desarrollador diseñar, construibuir, probar e iterar las API´s
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>    
            <div className="client__avatar">
                  <img src={logoXamp} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Xampp</h5>
          <small className='client_review'>
             Sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes PHP y Perl
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>    
            <div className="client__avatar">
                  <img src={logoGit} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Git Hub</h5>
          <small className='client_review'>
              Plataforma para crear proyectos abiertos, caracterizada sobre todo por sus funciones colaborativas
          </small>
        </SwiperSlide>

      </Swiper>
      
      
        
      </div>

    </section>
  )
}

export default Testimonials