import React from 'react' ;
import "./portfolio.css" ;
import snakeScreen from  "../../assets/screen_snake.jpg" ;
import tatetiScreen from "../../assets/tateti_screen.jpg" ;
const Portfolio = () => {
  return (
   <section id="portfolio">

         
      <h5>Proyectos  </h5>
      <h2>Realizados</h2>

    <div className="container portfolio__container"> 

      <article className='portfolio__items'>

          <div className="portfolio__item-image">
            <img src={snakeScreen} alt="snake_game" />
           </div>
            <h3>Juego Snake</h3>
            <p>HTML / CSS / Javascript</p>
            <div className="portfolio__items-cta">
            <a href="https://github.com/Nicoogf/snake" className='btn'> Repositorio Git</a>
            <a href="https://nicoogf.github.io/snake/" className='btn btn-primary' target='_blank' without rel="noreferrer">Live Demo</a>
            </div>
      </article>


     <article className='portfolio__items'>

      <div className="portfolio__item-image">
        <img src={tatetiScreen} alt="snake_game" />
      </div>
        <h3>Tic-tac-toe</h3>
        <p>ReactJS</p>
        <div className="portfolio__items-cta">
        <a href="https://github.com/Nicoogf/tateti" className='btn'> Repositorio Git</a>
        <a href="https://sweet-selkie-2bd664.netlify.app/" className='btn btn-primary' target='_blank' without rel="noreferrer">Live Demo</a>
        </div>
    </article>

  

    </div>

   </section>
  )
}

export default Portfolio