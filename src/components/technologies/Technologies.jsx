import React from 'react'
import './technologies.css'
import saly43 from '../../assets/saly-43.png'

function Technologies() {
  return (
    <div className='pfo__technologies section__padding' id='technologies'>
      <div className='pfo__technologies-image'>
        <img src={saly43} alt='looking at the phone' />
      </div>
      <div className='pfo__technologies-content'>
        <div className='pfo__technologies-content_heading'>
          <h4>Never settle!</h4>
          <h1>Discover new <span className='gradient__text-orange'>technologies</span></h1>
          <p>I am passionate about technology, innovation and big challenging tasks on my to do list. Never stop learning : currently I am improving my frontend skills by learning <span className='gradient__text-pink'>React.js</span> with
          <span className='gradient__text-pink'> Node.js</span> on the backend coupled with <span className='gradient__text-pink'>Mongo DB</span>. This is so fun !</p>
          <h4 className='gradient__text-pink'>Never settle!</h4>
        </div>

      </div>
    </div>
  )
}

export default Technologies