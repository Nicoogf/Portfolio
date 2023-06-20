import React from 'react';
import "./about.css" ;
import ME from "../../assets/me2.jpg" ;
import { FaAward } from 'react-icons/fa';
import { BsCloudCheck } from 'react-icons/bs';
import { FcDiploma1 } from 'react-icons/fc';

const About = () => {
  return (

    <section id="about"> 

    <h5>Un poco mas </h5>
    <h2>Acerca de mi</h2>

    <div className="container about__container">

        <div className="about__me">

              <div className="about__me-image">
                <img src={ME} alt="About Img" />
                
              </div>
              
        </div>

        <div className="about__content">

            <div className="about__cards">

              <article className='about_card'> 
                <FaAward className='about__icon'/>
                <h5>Expeciencia</h5>
                <small>1+ Año de experciencia</small>
              </article>


            
              <article className='about_card'> 
                <BsCloudCheck className='about__icon'/>
                <h5>Proyectos</h5>
                <small> independientes </small>
              </article>
          

          
              <article className='about_card'> 
                <FcDiploma1 className='about__icon'/>
                <h5>Certificados</h5>
                <small>Oficiales</small>
              </article>

              
            </div>

            <p>
            Soy un desarrollador Junior con conocimientos fullstack, motivado por embarcarme en mi primera experiencia laboral en el area IT y centrarme en el sector frontend
            </p>

            <a href="contact" className='btn btn-primary'>Contactame </a>

      </div>

    </div>   
    
    </section>
  )
}

export default About