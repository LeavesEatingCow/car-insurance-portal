// WelcomePage.js

import React from "react";
import {Link} from "react-router-dom";
import './Welcome.css';

import HeaderImg from "./images/header.jpg";
import ConnectionImg from "./images/connection.jpg";
import SignUpImg from "./images/sign_up.jpg";

import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';
import MouseIcon from '@mui/icons-material/Mouse';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HubIcon from '@mui/icons-material/Hub';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <Navbar/>
      <header>
        <img src={HeaderImg} alt="Welcome to RapidInsure" />
        <div class="centered"><h1>Welcome to RapidInsure!</h1>
        <p>Effortlessly Connect with Leading Car Insurance Agencies</p></div>
      </header>

      <div>At RapidInsure, we streamline the process of finding the best car insurance for your needs. Our platform is designed to make insurance inquiries as straightforward and efficient as possible. Say goodbye to the hassle of reaching out to multiple insurers one by one!</div>
      <article className="key-points">
        {/* Key Points Section */}
        {/* Use icons or images next to each point */}
        <div className="point">
          <CloseFullscreenIcon />
          <p>Simplify Your Insurance Experience</p>
        </div>
        <div className="point">
          <HubIcon />
          <p>Effortlessly Connect with Leading Car Insurance Agencies</p>
        </div>
      </article>

      <article className="how-it-works">
        {/* How It Works Section */}
        {/* Use relevant images for each step */}
        <h2>How It Works</h2>
        <div className="step">
          <PersonIcon />
          <p>Create Your Profile: Sign up with just a few simple steps and start your journey towards hassle-free insurance browsing.</p>
        </div>
        <div className="step">
          <DriveEtaIcon />
          <p>Generate a Quote Request: Tell us a bit about your car – its make, model, and year – along with your location and any other relevant details. Our system will craft a personalized insurance query tailored to your needs.</p>
        </div>
        <div className="step">
          <AdsClickIcon />
          <p>Choose Your Insurance Agencies: Browse through a list of top car insurance providers. Select the ones you want to engage with, from local favorites to national giants.</p>
        </div>
        <div className="step">
          <MouseIcon />
          <p>Send in One Click: Send out your tailored insurance query to multiple agencies simultaneously with just a click. No more repetitive form submissions!</p>
        </div>
      </article>

      <article className="why-choose">
        {/* Why Choose RapidInsure Section */}
        {/* Use icons or images next to each point */}
        <h2>Why Choose RapidInsure?</h2>
        <div class="choose-container">
          <div class="choose-wrapper">
            <AccessTimeFilled />
            <p>Time-Efficient: Save hours by reaching out to multiple agencies in one go.</p>
          </div>
          <div class="choose-wrapper">
            <EmojiPeopleIcon />
            <p>User-Friendly Interface: Navigate through our platform with ease.</p>
          </div>
          <div class="choose-wrapper">
            <SecurityIcon />
            <p>Secure and Reliable: Your data's security is our top priority.</p>
          </div>
        </div>
      </article>

      <article className="cta">
        {/* Call to Action Section */}
        <div class="cta-container">
          <div class="cta-text">
          <h3>Ready to Dive In?</h3>
          <p>Join RapidInsure today and transform the way you find car insurance. Sign up now and step into the world of simplified insurance browsing!</p>
          <Link to ="/Signup"><button>Sign Up</button></Link>
          </div>
          <div><img src={SignUpImg} alt="Signing Up"/></div>
        </div>
      </article>
    </div>
  );
};

export default WelcomePage;
