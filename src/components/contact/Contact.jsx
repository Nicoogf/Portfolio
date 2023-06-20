import React from 'react' ;
import "./contact.css" ;
import {MdOutlineEmail} from "react-icons/md" ;
import {AiOutlineInstagram} from "react-icons/ai" ;
import {BsWhatsapp} from "react-icons/bs" ;
import { useRef } from 'react' ;
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {   

    e.preventDefault();

    emailjs.sendForm('service_oq0cbon', 'template_lg3g9qs', form.current, 'BjjMTn9xEt7p26HyT')

    e.target.reset()
  
  };



  return (
    <section id="contact"> 
    
    <h5>Para contactarse</h5>
    <h2>Mandar Email</h2>

    <div className="container contact__container">

      <div className="contact__options">

       <article className='contact__option'>

         <MdOutlineEmail className='contact__options-icon'/>
           <h4> Email </h4>
           <h5> Nicolasgfalabella@gmail.com </h5>
           <a href="mailto:Nicolasgfalabella@gmail.com" target='_blank'> Enviar Mail </a>

       </article>

       <article className='contact__option'>
        
        <BsWhatsapp className='contact__options-icon'/>
          <h4> Whatsapp </h4>
          <h5> Nicolas Falabella </h5>
          <a href="https://api.whatsapp.com/send?phone=5492324584106" target='_blank'> Enviar Mensaje </a>

     </article>

     <article className='contact__option'>
        
        <AiOutlineInstagram className='contact__option-icon' />
          <h4> Instagram </h4>
          <h5> nfalabella_ </h5>
          <a href="https://www.instagram.com/nfalabella_/" target='_blank'> Ver Perfil </a>

     </article>

      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Ingrese su nombre completo' required />
        <input type="email" name="email" placeholder='Ingresar Email' required/>
        <textarea name="message" rows="7" placeholder='Ingresar Mensaje' required></textarea>
        <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
      </form>
    </div>


   </section>
  )
}

export default Contact ;