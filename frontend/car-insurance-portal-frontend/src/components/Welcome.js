// WelcomePage.js

import React from 'react';
import './Welcome.css'; // Import the CSS file

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <header>
        <img src="path-to-your-header-image.jpg" alt="Welcome to RapidInsure" />
        <h1>Welcome to RapidInsure!</h1>
        <p>Effortlessly Connect with Leading Car Insurance Agencies</p>
      </header>

      <section className="key-points">
        {/* Key Points Section */}
        {/* Use icons or images next to each point */}
        <div>
          <img src="connection-icon.png" alt="Connect" />
          <p>Effortlessly Connect with Leading Car Insurance Agencies</p>
        </div>
        <div>
          <img src="simplify-icon.png" alt="Simplify" />
          <p>Simplify Your Insurance Experience</p>
        </div>
      </section>

      <section className="how-it-works">
        {/* How It Works Section */}
        {/* Use relevant images for each step */}
        <div>
          <img src="profile-icon.png" alt="Create Profile" />
          <p>Create Your Profile: Sign up with just a few simple steps and start your journey towards hassle-free insurance browsing.</p>
        </div>
        {/* Repeat similar structure for other steps */}
      </section>

      <section className="why-choose">
        {/* Why Choose RapidInsure Section */}
        {/* Use icons or images next to each point */}
        <div>
          <img src="time-icon.png" alt="Time-Efficient" />
          <p>Time-Efficient: Save hours by reaching out to multiple agencies in one go.</p>
        </div>
        {/* Repeat similar structure for other benefits */}
      </section>

      <section className="cta">
        {/* Call to Action Section */}
        <p>Ready to Dive In? Join RapidInsure today and transform the way you find car insurance. Sign up now and step into the world of simplified insurance browsing!</p>
        <button>Sign Up</button>
      </section>
    </div>
  );
};

export default WelcomePage;
