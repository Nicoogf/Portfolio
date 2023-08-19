import React from 'react' ;
import "./header.css" ;
import CTA from "./CTA" ;
import ME from "../../assets/me.png" ;
import HeadersSocials from "./HeadersSocials" ;

const Header = () => {
  return (

    <header id="header">

      <div className="container header__container">
         

          <h1> Nicolas Falabella</h1>

          <h5 className='text-light'> FullStack Developer </h5>

          <CTA /> 

          <HeadersSocials />

          <div className="me">
            <img src={ME} alt="me"/>
          </div>



          <a href="#contact" className="scroll_down"> Ir abajo</a>
      </div>
    </header> 
  )
}

export default Header ;