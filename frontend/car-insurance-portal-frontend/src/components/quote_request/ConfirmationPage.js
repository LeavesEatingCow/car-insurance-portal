import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import "./ConfirmationPage.css";
import Navbar from "../shared_components/Navbar";

const ConfirmationPage = () => {
  const [emailPreview, setEmailPreview] = useState('');
  const { quoteRequestId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.submitted) {
      navigate("/");
      return;
    }

    const fetchEmailPreview = async () => {
      try {
        const response = await axios.get(`/api/quote-requests/${quoteRequestId}/preview`);
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