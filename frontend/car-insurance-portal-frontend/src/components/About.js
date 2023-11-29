import React from "react";
import './About.css';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Simplify Your Insurance Experience
        </h1>
        <p className="primary-text">
          At RapidInsure, we streamline the process of finding the best car insurance for your needs.
        </p>
        <p className="primary-text">
          Our platform is designed to make insurance inquiries as straightforward and efficient as possible. Say goodbye to the hassle of reaching out to multiple insurers one by one!
        </p>
      </div>
    </div>
  );
};

export default About;