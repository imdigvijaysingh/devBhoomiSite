import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Hero = ({
  heading,
  description,
  showButtons = true,
  primaryBtnText,
  secondaryBtnText,
  onPrimaryClick,
  secondaryBtnLink,
}) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>{heading}</h1>
          <p>{description}</p>

          {showButtons && (
            <div className="hero-btns">
              {primaryBtnText && (
                <button onClick={onPrimaryClick} className="btn">
                  {primaryBtnText}
                </button>
              )}

              {secondaryBtnText && secondaryBtnLink && (
                <Link
                  to={secondaryBtnLink}
                  className="btn btn-outline"
                  rel="noopener noreferrer"
                >
                  {secondaryBtnText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero;
