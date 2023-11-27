import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Create Your Profile",
      text: "Sign up with just a few simple steps and start your journey towards hassle-free insurance browsing.",
    },
    {
      image: ChooseMeals,
      title: "Generate a Quote Request",
      text: "Tell us a bit about your car – its make, model, and year – along with your location and any other relevant details. Our system will craft a personalized insurance query tailored to your needs. ",
    },
    {
      image: DeliveryMeals,
      title: "Choose Your Insurance Agencies",
      text: "Browse through a list of top car insurance providers. Select the ones you want to engage with, from local favorites to national giants.",
    },
    {
        image: DeliveryMeals,
        title: "Send in One Click",
        text: "Send out your tailored insurance query to multiple agencies simultaneously with just a click. No more repetitive form submissions!",
      },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;