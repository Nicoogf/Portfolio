import React from 'react'
import "./footer.css" ;
import {FaFacebookF} from "react-icons/fa" ;
import {FiInstagram} from "react-icons/fi" ;
import {AiOutlineLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>

      <a href="#" className='footer_logo'>NGF</a>

      <ul className='permalinks'>

      <li><a href="">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="Services">Servicios</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Certificados</a></li>
      <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="hppts://facebook.com"> <FaFacebookF/> </a>
        <a href="hppts://facebook.com"> <FiInstagram/> </a>
        <a href="https://facebook.com"> <AiOutlineLinkedin/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Portfolio realizao con ReactJS 2023. Todos los derechos reservados </small>
      </div>

    </footer>
  )
}

export default Footer