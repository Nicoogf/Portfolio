import React from 'react'

import {Bslinkedin} from "react-icons/bs" ;
import {FaGithub} from "react-icons/fa" ;
import {FirDribble} from "react-icons/fi" ;


const HeadersSocials = () => {
  return (
   <div className="header__socials">

    <a href='https://www.linkedin.com' target='_blank'> <Bslinkedin /></a>

    <a href='https://github.com/' target='_blank'>  <FaGithub /> </a>

    <a href='https://www.instagram.com' target='_blank'>  <FirDribble /> </a>

   </div>
  )
}

export default HeadersSocials ;