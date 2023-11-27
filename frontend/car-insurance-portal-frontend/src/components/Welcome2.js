import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/car-logo.png"
import { FiArrowRight } from "react-icons/fi"

const Welcome = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className="home-banner-container">
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
        </div>
        <div className='home-text-section'>
          <h1 className="primary heading">
            Header text
          </h1>
          <p className='primary-text'>
            Paragraph text
          </p>
          <button className='secondary-button'>
            Order Now <FiArrowRight />
          </button>
        </div>

        <div className='home-image-container'>
          <img src={BannerImage} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Welcome;