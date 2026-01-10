import React from 'react'
import '../styles/Home.css'
const Hero = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Shape Your Future With Excellence</h1>
            <p>
              Join our vibrant community of learners and innovators at Dev
              Bhoomi Group of Institutions, where we nurture talent and foster
              success through world-class education.
            </p>
            <div className="hero-btns">
              <button 
                onClick={() => scrollToSection('programs')} 
                className="btn"
              >
                Explore Programs
              </button>
              <a 
                href="admission_form/admission.html" 
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
