import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <>
      <section className="cta">
        <p className="cta-text">
          Have a project in mind? <br className="sm:block hidden" /> Let's build
          something meaningful together!
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </section>
      <div className="flex gap-10 border-t pt-6 justify-center mt-6">
        {socialLinks.map((link) => (
          <a href={link.link}>
            <img className="w-6 h-6 md:w-10 md:h-10" src={link.iconUrl} alt="" />
          </a>
        ))}
      </div>
    </>
  );
};

export default CTA;
