import React from 'react'
import { Link } from 'react-router-dom'

const Sertifikat = () => {
  return (
    <div className='sertifikat'>
        <Link to='/portofolio' className='x'>x</Link>
        <div className='container'>
           <img src={require('../../source/img/sertifikat/1.png')} alt=''/> 
           <img src={require('../../source/img/sertifikat/2.png')} alt=''/> 
           <img src={require('../../source/img/sertifikat/3.png')} alt=''/> 
        </div>
    </div>
  )
}

export default Sertifikat