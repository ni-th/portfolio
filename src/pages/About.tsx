import React from 'react'
import NavBar from '../components/layout/NavBar'

const About: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="max-w-4xl w-full">
        <NavBar className="mt-5" />
        <div>
          <h2>Hello! I’m Nimantha</h2>
          <p>A passionate software developer with a background in Physical Science and formal training in Software Engineering. I enjoy turning complex problems into clean, efficient code and building applications that make a difference.</p>
        </div>
      </div>
    </div>
  )
}

export default About