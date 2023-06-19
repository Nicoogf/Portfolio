import React from 'react' ;
import "./experience.css" ;
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience"> 
    
    <h5> Lenguajes </h5>
    <h2> Mi experciencia</h2>

    <div className="container experience__container">

      <div className="expecience__frontend">

        <h3>Frontend Development </h3>

        <div className="experience__content">

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>HTML</h4>
            <small class="text-light">Expecienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>CSS</h4>
            <small class="text-light">Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>Javascript</h4>
            <small class="text-light">Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>Boostrap</h4>
            <small class="text-light">Basic</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>ReactJS</h4>
            <small class="text-light">Basic</small>
            </div>
          </article>

        </div>

      </div>

      <div className="expecience__backend">

        <h3>Backend Development </h3>

        <div className="experience__content">

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>NodeJS</h4>
            <small class="text-light">Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>MySql</h4>
            <small class="text-light">Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>Apis</h4>
            <small class="text-light">Expecienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>Python</h4>
            <small class="text-light">Basic</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icons"/>
            <div>
            <h4>Postman</h4>
            <small class="text-light">Intermediate</small>
            </div>
          </article>

        </div>

      </div>

    </div>

     </section>
  )
}

export default Experience