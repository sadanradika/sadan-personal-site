import React from 'react'
import Home from '../page/Home'
import About from '../page/About';
import Portofolio from '../page/Portofolio';
import Contact from '../page/Contact';
import {Routes, Route } from 'react-router-dom'
import Sertifikat from '../page/portofolio/Sertifikat';

const Main = (props) => {
  return (
    <div className='main'>
          <Routes>
            <Route path='/portofolio/sertifikat' element={<Sertifikat/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portofolio' element={<Portofolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
    </div>
  )
}

export default Main