import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Step into the future before others.</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p><a href="#home">Home</a></p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
        <h1>MNT</h1>
          <p>Cluj-Napoca , Romania</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p><a href='https://github.com/munteanumarco'>Github</a></p>
          <p><a href='https://www.linkedin.com/in/munteanumarco/'>LinkedIn</a></p>
          <p><a href='https://www.instagram.com/marco_munteanu_/'>Instagram</a></p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p> Cluj-Napoca - Romania</p>
          <p>+40 720 147 517</p>
          <p>marcomunteanu02@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2022 Marco Munteanu. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer