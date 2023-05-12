import React from 'react'
import Project from '../../components/project/Project'
import './projects.css'

const projectsData = [
  {
    title: 'IoT project',
    text:  'Implemented remote control via web for and Arduino working as a thermostat coupled to a fan. Website : HTML, CSS for the frontend; PHP and MySQL on the backend.' +
    'Practical part : Arduino compatible development board (ESP8266), temperature sensor(DHT11), DC motor & driver for it.' +
    'C++ for the code running on the board.(written in Arduino IDE)'
  },
  {
    title: 'Simon Game',
    text:  'In the development of this game I learned about DOM manipulation with the jQuery library.The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. It\'s fast-paced play, with lights and sounds that can challenge you.'
  },
  {
    title: 'Weather Web App',
    text:  'User can get information about the weather from anywhere in the world. In the development of this project I learned to use APIs. (I used OpenWeather API)'
  },
  {
    title: 'Notes Manager',
    text:  'Fullstack web application using React, Node with Express and MongoDB (Mongoose). I learend to work with NoSQL database.'
  }
]

function Projects() {
  return (
    <div className='pfo__projects section__margin' id="projects">
      <div className='pfo__projects-heading'>
        <h1 className='gradient__text-pink'>Recent Projects</h1>
        <p>Short Description</p>
      </div>
      <div className='pfo__projects-container'>
        {projectsData.map((item, index) => (
          <Project title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Projects