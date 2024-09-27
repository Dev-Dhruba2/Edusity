import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimg} alt="" className='aboutimg' />
            <img src={playicon} alt="" className="playicon" />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing tommorows leaders today</h2>
            <p>Embark on a transformational educational journey with out universitiy's comprehensive educational program. Our cutting edge cirriculam is designed to empower students with the knowledge, skills, and experince needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands on learning and personalized mentorship, our program s prepare aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
            <p>Wether you aspire to become a teacher, administrator, counselor or educational leader our diverse range of program offers the perfect pathway to achive your goals and unlock your full potential in shapong the future of education.</p>
        </div>
    </div>
  )
}

export default About