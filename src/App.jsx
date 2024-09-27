import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Title title='Our Programs' subtitle='What we offer' />
      <div className="container">
      <Programs />
      <About />
      <Title title='Gallery' subtitle='Campus Photos' />
      <Campus />
      <Title title="Testimonials" subtitle="What students says" />
      <Testimonial />
      <Title title="Contact us" subtitle="Get in touch  " />
      <div>This is change</div>
      </div>
    </>
  )
}

export default App