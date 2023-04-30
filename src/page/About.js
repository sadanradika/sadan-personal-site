import React, { useState } from 'react'
import smk from '../source/img/image0.png';
import GrapichDesign from './about/GrapichDesign';
import Modelling from './about/Modelling';

const About = () => {
  const [karya, setKarya]=useState({desain: true})
  return (
    <div className='about'>
      <h1>i am</h1>
      <h2>I am a student starting a career in web development, <br/>and I am a graphic designer and 3D artist.</h2>

      <div className='school'>
        <h2>student at</h2>
        <div className='logo'>
          <img src={smk} alt=''/>
          <div>
            <h2>SMKN 1 GEGER</h2>
            <h3>Madiun, Jawa Timur, Indonesia</h3>
          </div>
        </div>
      </div>

      <div className='lengauage'>
        <h2>programming language</h2>
        <div className='logo'>
          <div className='javascript'>
            <div className='img-box'>
              <img src={require('../source/img/logo/JavaScript-logo.png')} alt='' />
            </div>
          </div>
          <div className='php'>
            <div className='img-box'>
              <img src={require('../source/img/logo/PHP-logo.svg.png')} alt='' />
            </div>
          </div>
          <div className='c'>
            <div className='img-box'>
              <img src={require('../source/img/logo/Csharp_Logo.png')} alt='' />
            </div>
          </div>

        </div>
        <br/>
        <div className='logo'>
          <div className='html'>
            <div className='img-box'>
              <img src={require('../source/img/logo/HTML5_logo_and_wordmark.svg.png')} alt='' />
            </div>
          </div>
          <div className='css'>
            <div className='img-box'>
              <img src={require('../source/img/logo/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png')} alt='' />
            </div>
          </div>
          <div className='react'>
            <div className='img-box'>
              <img src={require('../source/img/logo/React_logo_wordmark.png')} alt='' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='dsn-btn'>
          <button onClick={()=>setKarya({desain: true})} style={{backgroundColor: (karya.desain || "#272727")}} className='d2'>grapich design</button>
          <button onClick={()=>setKarya({modelling: true})} style={{backgroundColor: (karya.modelling || "#272727")}} className='d3'>3D modelling</button>
        </div>
      </div>
      {karya.desain === true ? <GrapichDesign/> : <Modelling/>}
    </div>
  )
}

export default About