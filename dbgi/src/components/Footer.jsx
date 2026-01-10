import React from "react";

const Footer = ({ 
    subscribed, 
    scrollToSection, 
    handleNewsletterSubmit 
}) => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>DBGI</h3>
            <p>
              Milestone Dabki Road <br />
              Village Beri Jamapur
              <br />
              Saharanpur (Uttar Pradesh) 247001
            </p>
            <p>Phone: 9568775222, 9568776222</p>
            <p>Email: dbgi@dbgisre.edu.in</p>
            <div className="social-links">
              {[
                {
                  icon: "fa-facebook-f",
                  href: "https://www.facebook.com/dbgisre",
                },
                { icon: "fa-twitter", href: "#" },
                {
                  icon: "fa-instagram",
                  href: "https://www.instagram.com/dbgi.saharanpur/",
                },
                { icon: "fa-linkedin-in", href: "#" },
                {
                  icon: "fa-youtube",
                  href: "https://www.youtube.com/@dbgisaharanpurofficial",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.icon.split("-")[1]} social media`}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            {[
              "Home",
              "About Us",
              "Academic Programs",
              "Admissions",
              "Campus Life",
            ].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.toLowerCase().replace(" ", "-"));
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            {[
              "Library",
              "Career Services",
              "Student Portal",
              "Alumni Network",
              "Campus Map",
            ].map((resource, index) => (
              <a key={index} href="#">
                {resource}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter for the latest updates and events.
            </p>
            {subscribed ? (
              <div className="subscription-success">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} DBGI SAHARANPUR. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
