import React from 'react' ;
import "./header.css" ;
import CTA from "./CTA" ;
import ME from "../../assets/mee.jpg" ;
import HeadersSocials from "./HeadersSocials" ;

const Header = () => {
  return (
    <header>

      <div className="container header_container">
          <h5> Hola ,Yo soy</h5>
          <h1> Nicolas Falabella</h1>
          <h5 className='text-light'> FullStack Developer </h5>
          <CTA /> 

          <HeadersSocials />

          <div className="mr">

            <img src={ME} alt="me"/>

          </div>

          <a href="#conctact" className="scroll_down"> Ir abajo</a>
      </div>

    </header> 
  )
}

export default Header ;