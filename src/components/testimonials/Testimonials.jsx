import React from 'react' ;
import "./testimonials.css" ;
import CERTIFICADO1 from "../../assets/titulo1.jpg" ;

const Testimonials = () => {
  return (
    <section id="testimonials"> 
    
      <h5>Certificados </h5>
      <h2>Oficiales</h2>

      <div className="container testimonials__container">


      <div className="container testimonials_container">
        <article className='testimonial'>    
            <div className="client__avatar">
                  <img src={CERTIFICADO1} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Full Stack Developer</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo unde, laborum dignissimos voluptas asperiores blanditiis repudiandae nesciunt voluptatem officiis, necessitatibus laboriosam illum, aspernatur animi expedita eum. Voluptatibus, aspernatur sapiente.
          </small>
        </article>
      </div>
      
      <div className="container testimonials_container">
        <article className='testimonial'>    
            <div className="client__avatar">
                  <img src={CERTIFICADO1} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Full Stack Developer</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo unde, laborum dignissimos voluptas asperiores blanditiis repudiandae nesciunt voluptatem officiis, necessitatibus laboriosam illum, aspernatur animi expedita eum. Voluptatibus, aspernatur sapiente.
          </small>
        </article>
      </div>
      

      <div className="container testimonials_container">
        <article className='testimonial'>    
            <div className="client__avatar">
                  <img src={CERTIFICADO1} alt="Primer Certificado" />
            </div>
            <h5 className='client_name'>Full Stack Developer</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo unde, laborum dignissimos voluptas asperiores blanditiis repudiandae nesciunt voluptatem officiis, necessitatibus laboriosam illum, aspernatur animi expedita eum. Voluptatibus, aspernatur sapiente.
          </small>
        </article>
      </div>
      
      
        
      </div>

    </section>
  )
}

export default Testimonials