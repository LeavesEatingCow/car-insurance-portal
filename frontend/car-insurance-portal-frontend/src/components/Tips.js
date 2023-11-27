import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
// import "./body_text.css";
// import "./IntroToTips.css";
// import "./thumbnails.css";
// import "./title.css";
import "./Tips.css";
import Highway from "../Assets/HighwayDrive.jpeg";
import Navbar from "./shared_components/Navbar";
import BannerBackground from "../Assets/home-banner-background.png"
import AboutBackground from "../Assets/about-background.png";

return (
    <div>
      <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
      </div>
      <Navbar/>
      <div class="title-section">
        <p class="rapidInsure-title_2">
          Tips For Better Auto Insurance
        </p>
        <img class="thumbnail1" src={Highway} alt=""/>
      </div>

      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <p class="introToTips">
        When it comes to purchasing car insurance, navigating the multitude of options can be a daunting task.
        As an essential aspect of responsible vehicle ownership, selecting the right insurance coverage is crucial for
        financial security and peace of mind on the road. To help you make an informed decision, consider the following tips
        that span from understanding your coverage needs to exploring various providers and policy features.
        Whether you're a first-time car owner or seeking to reevaluate your existing policy, these insights
        will guide you through the intricacies of the car insurance market, empowering you to make a well-informed and
        financially prudent choice.
      </p>

      <div class="insurance-body">
        <p class="requirements-title">
          Requirements For Car Insurance:
        </p>

        <p class="requirements-body">
          Several pieces of information are required to provide to obtain car insurance. During the quoting process, you
          may be asked to provide information about yourself, other household drivers, the vehicle and any past insurance
          history, if applicable.
        </p>

        <ul class="bullet-requirements">
          <li>Full legal name</li>
          <li>Driver's license number</li>
          <li>Date of birth</li>
          <li>Social security number</li>
          <li>Address</li>
          <li>Ticket and accident history</li>
        </ul>
      </div>

      <div class="insurance-tip1">
        <p class="tip1-title">
          1. Compare Insurance Quotes
        </p>

        <p class="tip1-body">
          Comparing insurance quotes is a crucial step in the process of purchasing insurance. By comparing quotes from
          multiple insurers, you can identify cost-effective options that align with your budget. This process helps you
          avoid overpaying for coverage and ensures you get the best value for your money. Comparing quotes allows you to
          tailor your coverage to meet your specific requirements. Different plans come with a range of features and
          benefits.
        </p>
      </div>

      <div class="insurance-tip2">
        <p class="tip2-title">
          2. Increase Your Deductible
        </p>

        <p class="tip2-body">
          By raising your deductible, you have several potential benefits. One of the most significant benefits of opting
          for a higher deductible is that it often leads to lower premium costs. A higher deductible means you'll have to
          pay more out of pocket if you make a claim, but the potential savings on your premium generally over time
          can outweigh this cost. A higher deductible can also encourage safe driving. Adjusting your deductible allows you
          to customize your insurance coverage to better fit your needs.
        </p>
      </div>

      <div class="insurance-tip3">
        <p class="tip3-title">
          3. Maintain A Good Credit History
        </p>

        <p class="tip3-body">
          Insurance companies look at your credit history and score when deciding on your insurance rates. This means that
          a better credit history will give you lower insurance costs. So, if you always pay your credit cards and bills on
          time, then you'll likely get lower rates.

        </p>
      </div>

      <div class="insurance-tip4">
        <p class="tip4-title">
          4. Keep A Clean Driving Record
        </p>

        <p class="tip4-body">
          Insurance companies like to reward safe drivers. That's why maintaining a clean driving record is essential for
          keeping your auto rates low. Insurers often provide discounts to drivers with a clean record. Clean records
          are typically classified as low-risk by companies. As a result, they may qualify for preferred rates. Clean
          driving makes the process of policy renewal much smoother. Insurers may be more inclined to renew your policy
          with better terms. A clean driving record enhances your insurability.
        </p>
      </div>


      <div class="faq">
        <p class="faq-title">
          Frequently Asked Questions
        </p>

        <p class="faq-q1">
          Does being married save money on car insurance?
        </p>
        <ul class="q1-bullet">
          <li>Auto insurance rates usually decrease after marriage. This is because married couple are often less reckless
          when driving. However, both individuals need to have a clean driving record and credit score.</li>
        </ul>

        <p class="faq-q2">
          Why do insurance companies use my prior insurance information?
        </p>
        <ul class="q2-bullet">
          <li>Some insurance companies may review your history of insurance coverage with previous auto carriers to
          determine whether you qualify for coverage and others may use it to establish a premium.</li>
        </ul>

        <p class="faq-q3">
          What can I do to keep my car insurance premiums low?
        </p>
        <ul class="q3-bullet">
          <li>To keep your car insurance premium low, consider driving a safer, older, or less valuable vehicle.
          If you do not want to sacrifice vehicle quality, you can also opt for a higher deductible. The best way is to
          maintain a clean and safe driving record.</li>
        </ul>
      </div>

    </div>
 );

export default Tips;
