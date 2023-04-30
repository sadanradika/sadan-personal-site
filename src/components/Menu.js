import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import profile from "./../source/img/profile2.jpg";

const Menu = () => {
    const [active, setActive] = useState({home: "active"});

  return (
    <div className='menu'>
        <div className='img-container'>
            <img src={profile} alt=''/>
        </div>
        <div className='name-tag'>
        <h2>Sadan Radika</h2>
            <div className='icon'>
                <svg width="100" height="20" viewBox="0 0 103 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0263 15.8164C14.4873 15.8164 16.4824 13.8213 16.4824 11.3603C16.4824 8.89927 14.4873 6.90421 12.0263 6.90421C9.56523 6.90421 7.57016 8.89927 7.57016 11.3603C7.57016 13.8213 9.56523 15.8164 12.0263 15.8164Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 15.8164V6.90421C2 3.82791 4.49384 1.33408 7.57013 1.33408H16.4823C19.5586 1.33408 22.0525 3.82791 22.0525 6.90421V15.8164C22.0525 18.8927 19.5586 21.3866 16.4823 21.3866H7.57013C4.49384 21.3866 2 18.8927 2 15.8164Z" stroke="white" stroke-width="2.5"/>
                    <path d="M18.1534 5.24439L18.1646 5.23193" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.4628 6.90421V15.8164C61.4628 18.8927 58.9689 21.3866 55.8927 21.3866H46.9804C43.9041 21.3866 41.4103 18.8927 41.4103 15.8164V6.90421C41.4103 3.82791 43.9041 1.33408 46.9804 1.33408H55.8927C58.9689 1.33408 61.4628 3.82791 61.4628 6.90421Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.8664 16.9305V13.0314V9.13226" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M50.3225 16.9305V13.3099M50.3225 13.3099V9.13226M50.3225 13.3099C50.3225 9.13226 57.0067 9.13226 57.0067 13.3099V16.9305" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.8664 5.80141L45.8776 5.78896" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M100.873 13.1193L80.8206 21.5625L84.5805 13.1193L80.8206 4.67616L100.873 13.1193Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M84.5145 13.1193H100.873" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <Link to={{pathname: '/', state: 'hello'}} onClick={()=>setActive({home: "active"})} className={`link ${active.home}`}>
            <div>
                <svg width="22" height="19" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1981 0L0 9.14861H3.04954V21.3468H9.14861V15.2477H15.2477V21.3468H21.3468V9.05713L24.3963 9.14861L12.1981 0Z" fill="white"/>
                </svg>
            </div>
            <h3>Home</h3>
        </Link>
        <Link to="/about" onClick={()=>setActive({about: "active"})} className={`link ${active.about}`}>
            <div>
                <svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1981 0.40741C8.84366 0.40741 6.09907 3.82289 6.09907 8.03125C6.09907 12.2396 8.84366 15.6551 12.1981 15.6551C15.5526 15.6551 18.2972 12.2396 18.2972 8.03125C18.2972 3.82289 15.5526 0.40741 12.1981 0.40741ZM5.82462 15.6551C2.59211 15.8076 0 18.4607 0 21.7542V24.8037H24.3963V21.7542C24.3963 18.4607 21.8347 15.8076 18.5717 15.6551C16.9249 17.5153 14.6683 18.7046 12.1981 18.7046C9.72802 18.7046 7.47137 17.5153 5.82462 15.6551Z" fill="white"/>
                </svg>
            </div>
            <h3>About</h3>
        </Link>
        <Link to="/portofolio" onClick={()=>setActive({potofolio: "active"})} className={`link ${active.potofolio}`}>
            <div>
                <svg width="22" height="25" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0740738V27.9556H24.3963V14.0148H10.4556V0.0740738H0ZM13.9407 0.0740738V10.5296H24.3963L13.9407 0.0740738ZM3.48519 7.04444H6.97037V10.5296H3.48519V7.04444ZM3.48519 14.0148H6.97037V17.5H3.48519V14.0148ZM3.48519 20.9852H17.4259V24.4704H3.48519V20.9852Z" fill="white"/>
                </svg>
            </div>
            <h3>Portofolio</h3>
        </Link>
        <Link to="/contact" onClick={()=>setActive({contact: "active"})} className={`link ${active.contact}`}>
            <div>
                <svg width="22" height="16" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0740757V3.12361L12.1981 9.22269L24.3963 3.12361V0.0740757H0ZM0 6.17315V18.3713H24.3963V6.17315L12.1981 12.2722L0 6.17315Z" fill="white"/>
                </svg>
            </div>
            <h3>Contact</h3>
        </Link>
    </div>
  )
}

export default Menu