import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container '>
        <div className="hero-text">
            <h1>We ensure better education in a better world</h1>
            <p>Our cutting-edge cirriculam is designed to empower students with knowledge, skills, and experince needed to excel in the dynamic field of education.</p>
            <button className='btn'>Explore More <img src={darkarrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero;

