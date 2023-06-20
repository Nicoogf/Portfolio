import React from 'react' ;
import "./services.css" ;
import {BiCheck} from "react-icons/bi" ;

const Services = () => {
  return (
    <section id="services"> 
    
    <h5>Certificaciones  </h5>
    <h2>Oficiales</h2>

    <div className="container services__container">
     
      <article className="service">
        <div className="service__head">
          <h3>Universidad Tecnológica Nacional</h3>
          <h6 className='services__small'>Tecnicatura intensiva de Desarrollo web</h6>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p>Stack Inicial (HTML / CSS / Javascript)</p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p> Boostrap </p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p> ReactJs  </p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p> Metodología ágil SCRUM </p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p> Controlador de versiones </p>
          </li>

        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Digital House</h3>
          <h6 className='services__small'>Desarrollador Full Stack</h6>
        </div>

        <ul className='service_list'>

          <li>
            <BiCheck  className='service__list-icon'/>
            <p>Actividades y grupos: Equipo de desarrollo web </p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p>Node Js - Express</p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p>Programación orientada a objetos (POO) </p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p> EJS(motor de renderizado) </p>
          </li>
          <li>
            <BiCheck  className='service__list-icon'/>
            <p> Base de datos </p>
          </li>
       
        </ul>
      </article>


   
    </div>
    
    </section>
  )
}

export default Services