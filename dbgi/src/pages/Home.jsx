import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import logo from "../assets/images/logo.png";
import campus1 from "../assets/images/campus_1.webp";
import Engineering from "../assets/courses_images/engineering.jpg";
import Business from "../assets/courses_images/business.png";
import Pharmacy from "../assets/courses_images/pharmacy.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Notice from "../components/Notice";
import About from "../components/About";
import ApplyNow from "../components/ApplyNow";
import Footer from "../components/Footer";

const Home = () => {
  const [currentNoticeSlide, setCurrentNoticeSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const statsSectionRef = useRef(null);
  const statsAnimated = useRef(false);

  const noticeSlides = [
    {
      title: "Admissions Open 2025",
      description: "Apply before March 31st for the upcoming academic session",
      link: "/admission_form/admission.html",
      buttonText: "Apply Now",
    },
    {
      title: "Campus Recruitment",
      description:
        "TCS campus drive on February 15th - Don't miss this opportunity",
      link: "/placements/placements.html",
      buttonText: "Register Now",
    },
    {
      title: "Annual Fest Tvaran 2025",
      description: "Join us for cultural extravaganza from November 10th",
      link: "/events/tvaran.html",
      buttonText: "View Details",
    },
  ];

  const testimonials = [
    {
      content:
        "The faculty here goes above and beyond to ensure we understand complex concepts. Their practical teaching approach has prepared me exceptionally well for my career.",
      author: "Anjali Tiwari",
      role: "BTECH(CSE) 2023-27",
    },
    {
      content:
        "The faculty doesn't just teach subjects; they mentor us for life. Their guidance helped me discover my true potential and career path.",
      author: "Taniya Pundir",
      role: "BTECH(CSE) 2023-27",
    },
    {
      content:
        "The teachers are truly approachable. Even the toughest subjects felt manageable because of their constant guidance.",
      author: "Sakshi Pundir",
      role: "BTECH(CSE) 2024-28",
    },
  ];

  const campusCards = [
    { id: "sports", title: "Sports" },
    { id: "alumni", title: "Alumni Meet" },
    { id: "fresher", title: "Fresher's Competition" },
    { id: "tvaran", title: "Annual Fest" },
    { id: "job", title: "Job Fair" },
    { id: "industry_visit", title: "Industrial Visit" },
    { id: "trip", title: "DBGI Family Visit" },
    { id: "girl_game", title: "Girls Competition" },
    { id: "play", title: "Nukkad Play" },
    { id: "star_night", title: "Star Night" },
    { id: "seminar", title: "Seminar Presentation" },
    { id: "farewell", title: "Seniors Farewell" },
    { id: "winners", title: "Winners" },
    { id: "guest_visit", title: "Guests Visit" },
    { id: "jagrukta", title: "Awareness Program" },
    { id: "supportive_faculty", title: "Supportive Faculty" },
    { id: "yoga", title: "Yoga Divas" },
    { id: "women_empower", title: "Women Empowerment" },
    { id: "lovely_faculty", title: "Lovely Faculty" },
    { id: "parents_felicitation", title: "Parents Felicitation Ceremony" },
    { id: "moot_court", title: "Moot Court Competition" },
  ];

  const statsData = [
    { id: "colleges-count", number: "4+", label: "Colleges", value: 4 },
    { id: "students-count", number: "8,453+", label: "Students", value: 8453 },
    { id: "companies-count", number: "132+", label: "Companies", value: 132 },
    { id: "placement-rate", number: "80%", label: "Placement Rate", value: 80 },
    { id: "package-amount", number: "37L", label: "Highest CTC", value: 37 },
  ];

  // Auto slide for notice board
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeSlide((prev) => (prev + 1) % noticeSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stats animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          animateStats();
          statsAnimated.current = true;
          observer.unobserve(entry.target);
        }
      });
    });

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  const animateStats = () => {
    console.log("animateStats called");

    // Get all stat elements
    const statElements = document.querySelectorAll(".stat-number");

    if (statElements.length === 0) {
      console.log("No stat elements found");
      return;
    }

    console.log(`Found ${statElements.length} stat elements`);

    // Get all final values
    const statsData = Array.from(statElements).map((stat) => {
      const finalValue = stat.getAttribute("data-final") || stat.textContent;
      console.log(`Final value: ${finalValue}`);

      const numericValue = parseFloat(finalValue.replace(/[+,%L]/g, ""));
      const hasPlus = finalValue.includes("+");
      const hasPercent = finalValue.includes("%");
      const hasL = finalValue.includes("L");

      return {
        element: stat,
        finalValue,
        numericValue,
        hasPlus,
        hasPercent,
        hasL,
        current: 0,
      };
    });

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    console.log(`Starting animation for ${statsData.length} counters`);

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      statsData.forEach((stat) => {
        if (stat.element) {
          const currentValue = stat.numericValue * progress;

          if (stat.hasPercent) {
            stat.element.textContent = Math.floor(currentValue) + "%";
          } else if (stat.hasL) {
            stat.element.textContent = Math.floor(currentValue) + "L";
          } else if (stat.hasPlus) {
            stat.element.textContent = Math.floor(currentValue) + "+";
          } else {
            stat.element.textContent =
              Math.floor(currentValue).toLocaleString();
          }
        }
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        // Set final values
        statsData.forEach((stat) => {
          if (stat.element) {
            stat.element.textContent = stat.finalValue;
          }
        });
        console.log("Animation completed");
      }
    };

    // Start animation
    requestAnimationFrame(updateCounters);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      e.target.reset();
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 80;
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  // Main file starts now

  return (
    <div className="home-container">

      {/* Navigation bar */}
      <Navbar
        headerScrolled={headerScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        scrollToSection={scrollToSection}
        logo={logo}
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About 
      campus1={campus1} 
      />

      {/* Stats Section */}
      <section className="stats-section" ref={statsSectionRef} id="stats">
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div
                className="stat-number"
                id={stat.id}
                data-final={stat.number}
              >
                {stat.number.includes("+")
                  ? "0+"
                  : stat.number.includes("%")
                  ? "0%"
                  : stat.number.includes("L")
                  ? "0L"
                  : "0"}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Notice Board Section */}
      <Notice
        noticeSlides={noticeSlides}
        currentNoticeSlide={currentNoticeSlide}
        setCurrentNoticeSlide={setCurrentNoticeSlide}
      />

      {/* Programs Section */}
      <section className="programs" id="programs">
        <div className="container">
          <div className="section-title">
            <h2>Courses We Are Offering</h2>
            <p>
              We are Offering many Courses in The field of Engineering,
              Management, Computer Application, Pharmacy and Polytechnic
            </p>
          </div>
          <div className="programs-grid">
            {[
              {
                img: Engineering,
                alt: "Engineering",
                title: "Engineering & Technology",
                description:
                  "Cutting-edge programs in computer science, mechanical, electrical, and civil engineering with industry partnerships.",
              },
              {
                img: Business,
                alt: "Business",
                title: "Business & Management",
                description:
                  "Develop leadership skills and business acumen through our AACSB-accredited business programs.",
              },
              {
                img: Pharmacy,
                alt: "Health Sciences",
                title: "Pharmacy",
                description:
                  "Prepare for careers in medicine, nursing, pharmacy, and public health with our comprehensive health sciences programs.",
              },
            ].map((program, index) => (
              <div className="program-card" key={index}>
                <div className="program-img">
                  <img src={program.img} alt={program.alt} />
                </div>
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <a
                    href="academics/academics.html"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="campus-life" id="campus">
        <div className="container">
          <div className="section-title">
            <h2>Campus Life</h2>
            <p>
              Experience a vibrant campus community with diverse activities,
              clubs, and resources that enrich your college experience.
            </p>
          </div>
          <div className="campus-grid">
            {campusCards.map((card, index) => (
              <div className="campus-card" key={index} id={card.id}>
                <h3>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Students Say</h2>
            <p>
              Hear from our students and alumni about their experiences at Dev
              Bhoomi Group of Institutions.
            </p>
          </div>
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide ${
                  currentTestimonialSlide === index ? "active" : ""
                }`}
              >
                <div className="testimonial-content">{testimonial.content}</div>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  currentTestimonialSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonialSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ApplyNow />
      
      {/* Footer */}
      <Footer 
        subscribed={subscribed}
        setSubscribed={setSubscribed}
        scrollToSection={scrollToSection}
        handleNewsletterSubmit={handleNewsletterSubmit}
      />
    </div>
  );
};

export default Home;
