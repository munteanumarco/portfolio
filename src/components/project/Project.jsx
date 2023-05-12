import React from 'react'
import './project.css'

function Project({title, text}) {
  return (
    <div className='pfo__projects-container__project'>
      <div className='pfo__projects-container__project-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='pfo__projects-container__project-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Project