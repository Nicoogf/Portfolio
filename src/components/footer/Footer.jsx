import React from 'react'
import "./footer.css" ;
import {FaFacebookF} from "react-icons/fa" ;
import {FiInstagram} from "react-icons/fi" ;
import {AiOutlineLinkedin} from "react-icons/ai" ;


const Footer = () => {
  return (
    <footer>

      <a href="#header" className='footer_logo'>
        Nicolas Gabriel Falabella
      </a>

      <ul className='permalinks'>

      <li><a href="#header">Inicio</a></li>
      <li><a href="#about">Sobre Mi</a></li>
      <li><a href="#experience">Lenguajes</a></li>   
      <li><a href="#services">Certificados</a></li>
      <li><a href="#portfolio">Portfolio</a></li>    
      <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nicolas.falabella11"> <FaFacebookF/> </a>
        <a href="https://www.instagram.com/nfalabella_/"> <FiInstagram/> </a>
        <a href="https://www.linkedin.com/in/nicolas-falabella-02ab47251/"> <AiOutlineLinkedin/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Portfolio realizao con ReactJS 2023. Todos los derechos reservados </small>
      </div>

    </footer>
  )
}

export default Footer