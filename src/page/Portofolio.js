import React from 'react'
import { Link } from 'react-router-dom'

const Portofolio = () => {
  return (
    <div className='portofolio'>
      <div className='left'>
        {/* <div className='img-container'>
            <img src={require('../source/img/profile.jpeg')} alt=''/>
        </div> */}
        <table className='personal'>
          <tr>
            <td>City, date of birth  </td>
            <td>Madiun, 09 Oktober 2005</td>
          </tr>
          <tr>
            <td>Religion  </td>
            <td>Islam</td>
          </tr>
          <tr>
            <td>Gender  </td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Weight  </td>
            <td>50kg</td>
          </tr>
          <tr>
            <td>Height  </td>
            <td>160cm</td>
          </tr> 
          <tr>
            <td>Address  </td>
            <td>Ds. Joho, Rt. 13/3, Madiun, Jawa timur</td>
          </tr> 
        </table>
        <div className='head-list'>
          <p>CONTACT</p>
        </div>
        <div className='contact-list'>
          <div className='whatsapp'>
            <div>
              <svg width="30" height="30" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.0365 25.9137C54.1002 9.94217 39.588 -2.36697 22.8729 0.386761C11.3623 2.28683 2.13731 11.6219 0.347389 23.1324C-0.699028 29.7964 0.677892 36.1025 3.67946 41.307L1.22861 50.4219C0.677864 52.4872 2.57788 54.3597 4.61564 53.7814L13.5928 51.3031C17.6683 53.6988 22.4323 55.0757 27.5267 55.0757C43.0577 55.0757 55.9452 41.3896 55.0365 25.9137ZM40.9924 37.7823C40.7446 38.2779 40.4417 38.7461 40.0562 39.1867C39.3677 39.9302 38.6242 40.4809 37.7981 40.8114C36.972 41.1693 36.0633 41.3346 35.0995 41.3346C33.6951 41.3346 32.1805 41.0044 30.6109 40.316C29.0137 39.6275 27.4441 38.7185 25.8745 37.5895C24.2773 36.4329 22.7903 35.1387 21.3584 33.7343C19.9264 32.3023 18.6596 30.7878 17.5031 29.2182C16.374 27.6485 15.4654 26.0789 14.8045 24.5093C14.1436 22.9397 13.8132 21.4252 13.8132 19.9933C13.8132 19.057 13.9784 18.1483 14.3088 17.3222C14.6393 16.4685 15.1625 15.6975 15.906 15.0091C16.7872 14.1279 17.751 13.7148 18.7699 13.7148C19.1554 13.7148 19.5408 13.7974 19.8988 13.9626C20.2568 14.1278 20.5873 14.3757 20.8352 14.7337L24.0295 19.2497C24.2773 19.6077 24.4701 19.9106 24.5802 20.2136C24.7179 20.5165 24.773 20.7918 24.773 21.0672C24.773 21.3977 24.6628 21.7282 24.4701 22.0585C24.2773 22.3889 24.0295 22.7194 23.699 23.0498L22.6526 24.1513C22.4874 24.3165 22.4323 24.4817 22.4323 24.702C22.4323 24.8122 22.4599 24.9223 22.4874 25.0325C22.5425 25.1426 22.57 25.2253 22.5975 25.3079C22.8454 25.776 23.286 26.3543 23.8918 27.0703C24.5252 27.7862 25.186 28.5297 25.902 29.2457C26.6455 29.9892 27.3615 30.6501 28.105 31.2835C28.821 31.8893 29.4268 32.3023 29.8949 32.5502C29.9775 32.5777 30.0601 32.6328 30.1428 32.6603C30.2529 32.7154 30.3631 32.7154 30.5007 32.7154C30.7486 32.7154 30.9138 32.6328 31.079 32.4676L32.1254 31.4211C32.4834 31.0632 32.8139 30.8153 33.1168 30.6501C33.4472 30.4573 33.7501 30.3472 34.1081 30.3472C34.3835 30.3472 34.6589 30.4023 34.9618 30.5399C35.2647 30.6776 35.5951 30.8429 35.9256 31.0907L40.4968 34.3401C40.8548 34.5879 41.1026 34.8908 41.2678 35.2213C41.4055 35.5793 41.4881 35.9097 41.4881 36.2952C41.3229 36.7634 41.2127 37.2866 40.9924 37.7823Z" fill="black"/>
              </svg>
            </div>
            <p>081330254095</p>
          </div>
          <div className='instagram'>
            <div>
              <svg width="30" height="30" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.1 0H16.0092C5.97935 0 0 5.97935 0 16.0092V39.0724C0 49.1299 5.97935 55.1092 16.0092 55.1092H39.0724C49.1023 55.1092 55.0817 49.1299 55.0817 39.1V16.0092C55.1092 5.97935 49.1299 0 39.1 0ZM27.5546 38.2458C21.6579 38.2458 16.8634 33.4513 16.8634 27.5546C16.8634 21.6579 21.6579 16.8634 27.5546 16.8634C33.4513 16.8634 38.2458 21.6579 38.2458 27.5546C38.2458 33.4513 33.4513 38.2458 27.5546 38.2458ZM43.8669 13.4467C43.7292 13.7773 43.5363 14.0804 43.2883 14.356C43.0127 14.6039 42.7096 14.7968 42.379 14.9346C42.0483 15.0724 41.6901 15.155 41.3319 15.155C40.5879 15.155 39.8991 14.8795 39.3755 14.356C39.1276 14.0804 38.9347 13.7773 38.7969 13.4467C38.6591 13.116 38.5765 12.7578 38.5765 12.3996C38.5765 12.0414 38.6591 11.6832 38.7969 11.3525C38.9347 10.9943 39.1276 10.7187 39.3755 10.4432C40.0093 9.80944 40.9737 9.50634 41.8555 9.69922C42.0483 9.72678 42.2137 9.78189 42.379 9.86455C42.5443 9.91966 42.7096 10.0023 42.875 10.1125C43.0127 10.1952 43.1505 10.333 43.2883 10.4432C43.5363 10.7187 43.7292 10.9943 43.8669 11.3525C44.0047 11.6832 44.0874 12.0414 44.0874 12.3996C44.0874 12.7578 44.0047 13.116 43.8669 13.4467Z" fill="black"/>
              </svg>
            </div>
            <p>saduanz</p>
          </div>
          <div className='gmail'>
            <div>
              <svg width="30" height="30" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.9131 25.4894C54.7726 24.0561 53.5642 22.9882 52.131 22.9882H30.9132C29.3675 22.9882 28.1029 24.2529 28.1029 25.7985V30.6041C28.1029 32.1498 29.3675 33.4144 30.9132 33.4144H43.5877C43.2785 35.9999 41.5923 39.9062 37.8546 42.5198C35.4659 44.1779 32.2903 45.3301 28.1029 45.3301C27.9062 45.3301 27.7376 45.3301 27.5409 45.302C20.3747 45.0772 14.3044 40.2716 12.1124 33.6674C11.5222 31.8969 11.185 30.0421 11.185 28.103C11.185 26.1639 11.5222 24.281 12.0843 22.5386C12.2529 22.0327 12.4496 21.5269 12.6744 21.021C15.2599 15.2037 20.9086 11.1007 27.5409 10.904C27.7095 10.8758 27.9062 10.8758 28.1029 10.8758C32.1216 10.8758 35.1287 12.1967 37.2364 13.658C38.3324 14.4168 39.7937 14.2482 40.7493 13.3208L44.6556 9.4988C45.8921 8.29038 45.7797 6.23883 44.3745 5.22712C39.9062 1.93908 34.4542 0 28.1029 0C27.9062 0 27.7376 2.8115e-05 27.5409 0.0281311C16.7775 0.224852 7.5316 6.46371 3.00702 15.4848C1.09602 19.3068 0 23.5784 0 28.103C0 32.6275 1.09602 36.8992 3.00702 40.7212H3.03512C7.5597 49.7423 16.8056 55.9811 27.5409 56.1778C27.7376 56.2059 27.9062 56.2059 28.1029 56.2059C35.6907 56.2059 42.0701 53.7048 46.7071 49.405C52.0185 44.487 55.0818 37.2926 55.0818 28.7212C55.0818 27.5128 55.0256 26.473 54.9131 25.4894Z" fill="black"/>
              </svg>
            </div>
            <p>sadanradika464@gmail.com</p>
          </div>
          <div className='facebook'>
            <div>
              <svg width="30" height="30" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.0818 39.0805C55.0818 49.1054 49.1054 55.0818 39.0805 55.0818H35.8031C34.2884 55.0818 33.0491 53.8424 33.0491 52.3277V36.4366C33.0491 35.693 33.655 35.0595 34.3986 35.0595L39.2458 34.9769C39.6313 34.9494 39.9618 34.674 40.0444 34.2884L41.0084 29.0281C41.091 28.5324 40.7054 28.0642 40.1821 28.0642L34.3159 28.1468C33.5448 28.1468 32.9389 27.5409 32.9114 26.7973L32.8012 20.0498C32.8012 19.6091 33.1592 19.2236 33.6274 19.2236L40.2372 19.1134C40.7054 19.1134 41.0635 18.7554 41.0635 18.2872L40.9533 11.6773C40.9533 11.2091 40.5953 10.8511 40.1271 10.8511L32.691 10.9613C28.1192 11.0439 24.4838 14.7895 24.5665 19.3612L24.7042 26.935C24.7317 27.7061 24.1258 28.312 23.3547 28.3396L20.0498 28.3947C19.5816 28.3947 19.2236 28.7527 19.2236 29.2209L19.3062 34.4536C19.3062 34.9218 19.6642 35.2799 20.1324 35.2799L23.4373 35.2248C24.2084 35.2248 24.8143 35.8307 24.8419 36.5743L25.0897 52.2726C25.1173 53.8149 23.8779 55.0818 22.3357 55.0818H16.0013C5.97637 55.0818 0 49.1054 0 39.053V16.0013C0 5.97637 5.97637 0 16.0013 0H39.0805C49.1054 0 55.0818 5.97637 55.0818 16.0013V39.0805Z" fill="black"/>
              </svg>
            </div>
            <p>sadan radika</p>
          </div>
        </div>
        <div className='head-list'>
          <p>HOBBY</p>
        </div>
        <div className='hobby-list'>
          <p>coding</p>
          <p>desain</p>
          <p>singing & playing guitar</p>
          <p>fishing</p>
        </div>
        <div className='head-list'>
          <p>SKILLS</p>
        </div>
        <div className='skill-list'>
          <div className='skill'>
            <div className='img-box'>
              <img src={require('../source/img/logo/icon/1.png')} alt='' />
            </div>
            <div className='load-box'>
              <div className='load' style={{width: '80%'}}>
              </div>
            </div>
          </div>
          <div className='skill'>
            <div className='img-box'>
              <img src={require('../source/img/logo/icon/2.png')} alt='' />
            </div>
            <div className='load-box'>
              <div className='load' style={{width: '70%'}}>
              </div>
            </div>
          </div>
          <div className='skill'>
            <div className='img-box'>
              <img src={require('../source/img/logo/icon/3.png')} alt='' />
            </div>
            <div className='load-box'>
              <div className='load' style={{width: '90%'}}>
              </div>
            </div>
          </div>
          <div className='skill'>
            <div className='img-box'>
              <img src={require('../source/img/logo/icon/4.png')} alt='' />
            </div>
            <div className='load-box'>
              <div className='load' style={{width: '60%'}}>
              </div>
            </div>
          </div>
          <div className='skill'>
            <div className='img-box'>
              <img src={require('../source/img/logo/icon/5.png')} alt='' />
            </div>
            <div className='load-box'>
              <div className='load' style={{width: '60%'}}>
              </div>
            </div>
          </div>
          <div className='skill'>
            <div className='img-box'>
              <img src={require('../source/img/logo/icon/6.png')} alt='' />
            </div>
            <div className='load-box'>
              <div className='load' style={{width: '40%'}}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='logo-box'>
          <div className='img-box'>
            <img src={require('../source/img/salogo.png')} alt=''></img>
          </div>
          <h2>Sadan Radika Nur Oktavian</h2>
          <p>Web Developer & Grapich Designer</p>
        </div>

        <div className='head-list'>
          <p>PROFILE</p>
        </div>
        <div className='profile-list'>
          <p>Saya berumur 17 tahun, saya masih bersekolah di SMKN 1 GEGER, saya mudah berdaptasi, displin, bekerja sama dalam tim, mudah berkomunikasi dengan orang lain, dan suka mempelajari hal baru</p>
        </div>

        <div className='head-list'>
          <p>EDUCATION</p>
        </div>
        <div className='education-list'>
          <table>
            <tr>
              <td className='date'>2009-2012</td>
              <td><div className='circle'></div></td>
              <td>RA Alkautsar, Madiun.</td>
            </tr>
            <tr>
              <td>2012-2018</td>
              <td><div className='circle'></div></td>
              <td>MI Alkautsar, Madiun.</td>
            </tr>
            <tr>
              <td>2018-2021</td>
              <td><div className='circle'></div></td>
              <td>MTsN 4, Madiun.</td>
            </tr>
            <tr>
              <td>2021-now</td>
              <td><div className='circle'></div></td>
              <td>SMKN 1 Geger, Madiun.</td>
            </tr>
          </table>
        </div>
        <div className='head-list'>
          <p>WORK EXPERIENCE</p>
        </div>
        <div className='work-list'>
          <table>
            <tr>
              <td>2022</td>
              <td className='isi'>
                <h4>ISP ALVAN CENTER</h4>
                <p>Melaksanakan PKL selama 6 bulan di ISP Alvan Center sebagai pekerja lapangan pada tahun 2022</p>
              </td>
            </tr>
          </table>
        </div>
        <div className='head-list'>
          <p>SEMINAR</p>
        </div>
        <div className='seminar-list'>
          <p>Axioo Robotic Bothcamp</p>
          <p>Event BDD</p>
        </div>
        <div className='sertifikat-btn'>
          <Link to='/portofolio/sertifikat' className='link-btn'>SERTIFIKAT</Link>
        </div>
      </div>
    </div>
  )
}

export default Portofolio