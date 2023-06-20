import React from 'react'

import {BsLinkedin} from "react-icons/bs" ;
import {FaGithub} from "react-icons/fa" ;
import {AiOutlineInstagram} from "react-icons/ai" ;


const HeadersSocials = () => {
  return (
   <div className="header__socials">

    <a href='https://www.linkedin.com/in/nicolas-falabella-02ab47251/' target='_blank'> <BsLinkedin /></a>

    <a href='https://github.com/Nicoogf' target='_blank'>  <FaGithub /> </a>

    <a href='https://www.instagram.com/nfalabella_/' target='_blank'>  <AiOutlineInstagram /> </a>

   </div>
  )
}

export default HeadersSocials ;