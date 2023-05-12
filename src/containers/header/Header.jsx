import React from 'react'
import './header.css'
import saly13 from '../../assets/saly-13.png';
function Header() {
  return (
    <div className='pfo__header' id='home'>
      <div className='pfo__header-content'>
        <div className='pfo__header-content_info'>
          <h1>Hello! <span className='gradient__text-orange'> Marco Munteanu </span> here, Computer Science Student and <span className='gradient__text-pink'>Software Engineer.</span></h1>
          <p>Effective Student committed to learning, developing skills in Computer Science and team contribution.
          </p>
          <div className='pfo__header-content_info-btn'>
            <button type='button'><a href='#projects'>Projects</a></button>
          </div>
        </div>
        <div className='pfo__header-content_image'>
          <img src={saly13} alt='person coding'/>
        </div>
      </div>
    </div>
  )
}

export default Header