import React from 'react'
import './cta.css';

function CTA() {
  return (
    <div className='pfo__cta'>
        <div className='pfo__cta-content'>
            <p>Check the project code</p>
            <h3>Visit my GitHub and check other projects !</h3>
        </div>
        <div className='pfo__cta-btn'>
            <button type='button'><a href='https://github.com/munteanumarco'>GitHub</a></button>
      </div>
    </div>
  )
}

export default CTA