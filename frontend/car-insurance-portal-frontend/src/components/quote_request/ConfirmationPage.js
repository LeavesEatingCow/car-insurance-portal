import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import "./ConfirmationPage.css";
import BannerBackground from "../../Assets/home-banner-background.png"
import AboutBackground from "../../Assets/about-background.png";
import axiosInstance from "../../api/axiosInstance";
import Navbar from "../shared_components/Navbar";

const ConfirmationPage = () => {
  const [emailPreview, setEmailPreview] = useState('');
  const { quoteRequestId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchEmailPreview = async () => {
      try {
        const response = await axiosInstance.get(`/api/quote-requests/${quoteRequestId}/preview`);
        const formattedPreview = response.data.replace(/\n/g, "<br/>")
        setEmailPreview(formattedPreview);
      } catch (error) {
        console.error("Error fetching email preview", error);
      }
    };

    if (quoteRequestId) {
      fetchEmailPreview();
    }
  }, [quoteRequestId, navigate, location.state]);

  return (
    <>
      <Navbar />
      <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
      </div>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="confirmation-page">
        <h1>Thank you!</h1>
        <p>Your email has been successfully sent.</p>
        <div className="email-preview" dangerouslySetInnerHTML={{ __html: emailPreview }} />
        <button onClick={() => navigate('/')} className="home-button">Go to Home</button>
      </div>
    </>
  );
};

export default ConfirmationPage;