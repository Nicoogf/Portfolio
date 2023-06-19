import React from 'react';
import "./about.css" ;
import ME from "../../assets/me2.jpg" ;
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

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
                <FiUsers className='about__icon'/>
                <h5>Clientes</h5>
                <small>19 </small>
              </article>
          

          
              <article className='about_card'> 
                <VscFolderLibrary className='about__icon'/>
                <h5>Proyectos</h5>
                <small>+80</small>
              </article>

              
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ut modi ducimus consectetur facilis omnis excepturi eum nihil vel quisquam porro reiciendis a iusto voluptatem eveniet nobis, repellendus veniam iste.
            </p>

            <a href="contact" className='btn btn-primary'>Contactame </a>

      </div>

    </div>   
    
    </section>
  )
}

export default About