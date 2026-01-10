import React from "react";

const About = ({
    campus1,
}) => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Dev Bhoomi Group of Institutions</h2>
            <p>
              Dev Bhoomi Group Of Institutions(DBGI) Saharanpur campus
              established in the year 2009 is a premier group of institutions of
              Uttarakhand Uthan Samiti, a non-profit Society, professionally
              managed by the Eminent Academicians, Industrialists and
              Scientists.
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Legacy of Excellence</h3>
              <p>
                Keeping in tune with the upsurge in technical developments, the
                Samiti being committed to the cause of quality education and has
                established Six Temples of Learning and Innovations. DBGI is one
                of the best developing engineering colleges of Saharanpur
                district. The Campus is about 4 Km from Civil Hospital towards
                D.M. Residence at Beri Jama, Saharanpur. The nearest Airport is
                Jollygrant about 95 KMs from the Institute. The sprawling main
                campus is spread in one piece of land of 150 Bighas (22 acres),
                in the surroundings of greeneries, flora & fauna besides the
                National Forest.
              </p>
              <a href="/about/about.html" className="btn about-cta">
                Learn More
              </a>
            </div>
            <div className="about-image">
              <img src={campus1} alt="DBGI Campus" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
