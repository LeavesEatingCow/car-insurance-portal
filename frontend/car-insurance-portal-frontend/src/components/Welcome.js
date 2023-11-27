import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import Navbar from './shared_components/Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/car-logo.png"
import { FiArrowRight } from "react-icons/fi"
import About from './About'
import Work from './Work'
import Footer from './Footer'

const Welcome = () => {
  const navigate = useNavigate();
  
  const navigateToQuoteRequest = () => {
    navigate("/quote-request");
}

  return (
    <div className='home-container'>
      <Navbar/>
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
            Start Now <FiArrowRight />
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

export default Welcome

// WelcomePage.js

// import React from 'react';
// import { Link } from "react-router-dom";
// import './Welcome.css'; // Import the CSS file
// import HeaderImg from "./images/header.jpg";
// import ConnectionImg from "./images/connection.jpg";
// import SignUpImg from "./images/sign_up.jpg";
// import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled';
// import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
// import SecurityIcon from '@mui/icons-material/Security';

// const WelcomePage = () => {
//   return (
//     <div className="welcome-container">
//       <header>
//         <img src={HeaderImg} alt="Welcome to RapidInsure" />
//         <div class="centered"><h1>Welcome to RapidInsure!</h1></div>
//         <div><p>Effortlessly Connect with Leading Car Insurance Agencies</p></div>
//       </header>

//       <section className="key-points">
//         {/* Key Points Section */}
//         {/* Use icons or images next to each point */}
//         <div>
//           <img src="" alt="Simplify" />
//           <p>Simplify Your Insurance Experience</p>
//         </div>
//         <div>
//           <img src={ConnectionImg} alt="Connect" />
//           <p>Effortlessly Connect with Leading Car Insurance Agencies</p>
//         </div>
//         <div>At RapidInsure, we streamline the process of finding the best car insurance for your needs. Our platform is designed to make insurance inquiries as straightforward and efficient as possible. Say goodbye to the hassle of reaching out to multiple insurers one by one!</div>
//       </section>

//       <section className="how-it-works">
//         {/* How It Works Section */}
//         {/* Use relevant images for each step */}
//         <h2>How It Works</h2>
//         <div>
//           <img src="profile-icon.png" alt="Create Profile" />
//           <p>Create Your Profile: Sign up with just a few simple steps and start your journey towards hassle-free insurance browsing.</p>
//         </div>
//         <div>
//           <img src="profile-icon.png" alt="Generate Quote Request" />
//           <p>Generate a Quote Request: Tell us a bit about your car – its make, model, and year – along with your location and any other relevant details. Our system will craft a personalized insurance query tailored to your needs.</p>
//         </div>
//         <div>
//           <img src="profile-icon.png" alt="Browse Agencies" />
//           <p>Choose Your Insurance Agencies: Browse through a list of top car insurance providers. Select the ones you want to engage with, from local favorites to national giants.</p>
//         </div>
//         <div>
//           <img src="profile-icon.png" alt="One Click" />
//           <p>Send in One Click: Send out your tailored insurance query to multiple agencies simultaneously with just a click. No more repetitive form submissions!</p>
//         </div>
//         {/* Repeat similar structure for other steps */}
//       </section>

//       <section className="why-choose">
//         {/* Why Choose RapidInsure Section */}
//         {/* Use icons or images next to each point */}
//         <h2>Why Choose RapidInsure?</h2>
//         <div class="choose-wrapper">
//           <AccessTimeFilled></AccessTimeFilled>
//           <p>Time-Efficient: Save hours by reaching out to multiple agencies in one go.</p>
//         </div>
//         <div class="choose-wrapper">
//           <EmojiPeopleIcon></EmojiPeopleIcon>
//           <p>User-Friendly Interface: Navigate through our platform with ease.</p>
//         </div>
//         <div class="choose-wrapper">
//           <SecurityIcon></SecurityIcon>
//           <p>Secure and Reliable: Your data's security is our top priority.</p>
//         </div>
//         {/* Repeat similar structure for other benefits */}
//       </section>

//       <section className="cta">
//         {/* Call to Action Section */}
//         <div>
//           <div><img src={SignUpImg} alt="Signing Up"/></div>
//           <div class="bottom">
//           <h3>Ready to Dive In?</h3>
//           <p>Join RapidInsure today and transform the way you find car insurance. Sign up now and step into the world of simplified insurance browsing!</p>
//           <Link to ="/Signup"><button>Sign Up</button></Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WelcomePage;
