import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import Navbar from './shared_components/Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/car-logo.png"
import { FiArrowRight } from "react-icons/fi"
import About from './About'
import Work from './Work'
import Footer from './shared_components/Footer'

const Welcome = () => {
  const navigate = useNavigate();

  const navigateToQuoteRequest = () => {
    navigate("/quote-request");
  }

  return (
    <div className='home-container'>
      <div className="home-banner-container">
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
        </div>
        <div className='home-text-section'>
          <h1 className="primary heading">
            Welcome to RapidInsure!
          </h1>
          <p className='primary-text'>
            Effortlessly Connect with Leading Car Insurance Agencies
          </p>
          <button className='secondary-button' onClick={navigateToQuoteRequest}>
            Get Started <FiArrowRight />
          </button>
        </div>

        <div className='home-image-container'>
          <img src={BannerImage} alt=""/>
        </div>
      </div>
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default Welcome;
