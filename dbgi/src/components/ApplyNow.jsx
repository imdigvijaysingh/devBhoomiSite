import React from "react";
import {Link} from "react-router-dom"

const ApplyNow = ({
  heading,
  description,
  btnText,
}) => {
  return (
    <div>
      <section className="cta" id="admissions">
        <div className="container">
          <h2>{heading}</h2>
          <p>
            {description}
          </p>
          <Link
            to="admission_form/admission.html"
            className="btn"
            rel="noopener noreferrer"
          >
            {btnText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
