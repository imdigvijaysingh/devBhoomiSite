import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import ApplyNow from '../components/ApplyNow'
import '../styles/AboutUs.css'
import LeaderCard from '../components/LeaderCard'
import chairman from '../assets/images/chairman.webp'
import managingDirector from '../assets/images/managing_director.webp'
import director from '../assets/images/director.webp'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Hero
      heading="About Dev Bhoomi Group of Institutions"
      description="Discover our legacy of excellence in education, innovation, and community development"
      showButtons={false}
      />
      <About
      titleHeading="Our Story"
        
        titleDescription="Dev Bhoomi Group Of Institutions (DBGI) Saharanpur campus
            established in the year 2009 is a premier group of institutions of
            Uttarakhand Uthan Samiti, a non-profit Society, professionally
            managed by the Eminent Academicians, Industrialists and Scientists."
        
        contentHeading="Our Legacy of Excellence"
        
        contentDescription="Keeping in tune with the upsurge in technical developments, the
              Samiti being committed to the cause of quality education and has
              established Six Temples of Learning and Innovations. DBGI is one
              of the best developing engineering colleges of Saharanpur
              district.
              The Campus is about 4 Km from Civil Hospital towards D.M.
              Residence at Beri Jama, Saharanpur. The nearest Airport is
              Jollygrant about 95 KMs from the Institute. The sprawling main
              campus is spread in one piece of land of 150 Bighas (22 acres), in
              the surroundings of greeneries, flora & fauna besides the National
              Forest.
              We believe in education that goes beyond the classroom, preparing
              students to make meaningful contributions to society in their
              chosen fields."
        
        btnText="Explore Our Campus"
        btnRoute="/about"
      />

      <section class="leadership">
        <div class="container">
          <div class="section-title">
            <h2>Our Leadership</h2>
            <p>
              Meet the visionary leaders who guide DBGI towards academic
              excellence
            </p>
          </div>
          <div class="leadership-grid">
            <LeaderCard 
              leaderImg ={chairman}
              leaderImgAlt ="chairman"
              leaderName ="Mr. Sanjay Bansal"
              leaderPosition ="Chairman"
              leaderQuote ="“Success is sweet but its secret is sweat”"
            />
            <LeaderCard 
              leaderImg ={managingDirector}
              leaderImgAlt ="managing director"
              leaderName ="Mr. Aman Bansal"
              leaderPosition ="Managing Director"
              leaderQuote ="“Every student could be transformed into a competent Professional”"
            />
            <LeaderCard 
              leaderImg ={director}
              leaderImgAlt ="director"
              leaderName ="Dr. Deepak Raj Thakur"
              leaderPosition ="Director"
              leaderQuote ="“Empowering progress with disciplined leadership and strategic direction”"
            />
          </div>
        </div>
      </section>


      <ApplyNow
        heading="Ready to Join the DBGI Family?"
        description="Take the first step toward your future at Dev Bhoomi Group of
          Institutions. Applications for the next academic year are now open."
        showButtons={false}
        btnText="Apply Now"
      />
      <Footer />
    </div>
  )
}

export default AboutUs
