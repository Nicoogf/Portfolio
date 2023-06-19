import React from 'react' ;
import "./portfolio.css" ;
import IMG1 from  "../../assets/snake.png"

const Portfolio = () => {
  return (
   <section id="portfolio">

    <div className="container portfolio__container">

      <article className='portfolio__items'>

          <div className="portfolio__item-image">
            <img src={IMG1} alt="snake_game" />
            </div>
            <h3>El titulo del proyecto</h3>
            <div className="portfolio__items-cta">
            <a href="https://github.com" className='btn'>Ir al codigo de Git</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
      </article>


      <article className='portfolio__items'>
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt="snake_game" />
            </div>
            <h3>El titulo del proyecto</h3>
            <div className="portfolio__items-cta">
            <a href="https://github.com" className='btn'>Ir al codigo de Git</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
      </article>


      <article className='portfolio__items'>
        
        <div className="portfolio__item-image">
          <img src={IMG1} alt="snake_game" />
          </div>
          <h3>El titulo del proyecto</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com" className='btn'>Ir al codigo de Git</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
      </article>


      <article className='portfolio__items'>
        
        <div className="portfolio__item-image">
          <img src={IMG1} alt="snake_game" />
          </div>
          <h3>El titulo del proyecto</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com" className='btn'>Ir al codigo de Git</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
      </article>


      <article className='portfolio__items'>
        
        <div className="portfolio__item-image">
          <img src={IMG1} alt="snake_game" />
          </div>
          <h3>El titulo del proyecto</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com" className='btn'>Ir al codigo de Git</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
      </article>


      <article className='portfolio__items'>
        
        <div className="portfolio__item-image">
          <img src={IMG1} alt="snake_game" />
          </div>
          <h3>El titulo del proyecto</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com" className='btn'>Ir al codigo de Git</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
      </article>


    </div>

   </section>
  )
}

export default Portfolio