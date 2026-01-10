import React from "react";
import '../styles/Home.css'

const Notice = ({
  noticeSlides,
  currentNoticeSlide,
  setCurrentNoticeSlide,
}) => {
  return (
    <div>
      <section className="notice" id="notice">
        <div className="container">
          <div className="section-title">
            <h2>Notice Board</h2>
            <p>Stay updated with the latest announcements and events</p>
          </div>
          <div className="notice-slider">
            {noticeSlides.map((slide, index) => (
              <div
                key={index}
                className={`notice-slide ${
                  currentNoticeSlide === index ? "active" : ""
                }`}
              >
                <div className="notice-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <a href={slide.link} className="btn">
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {noticeSlides.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  currentNoticeSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentNoticeSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notice;
