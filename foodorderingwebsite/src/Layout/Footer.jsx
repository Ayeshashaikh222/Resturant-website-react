import React from "react";
import SocialMediaLogo from "../components/SocialMediaLogo";

function Footer() {
  return (
    <div className="md:w-9/12 md:pt-20 flex flex-col md:flex-row md:mx-auto ml-4">
      <div className="md:w-4/12 mb-7 m-4">
        <h2 className="font-semibold text-lg mb-4">Contact us</h2>
        <div className="flex flex-col ">
          <span>Ketodelia</span>
          <span>3187 Yonge St.</span>
          <span>TORONTO, Ontario M4N2K9</span>
          <span>(416) 623-0317</span>
        </div>
      </div>
      <div className="md:w-4/12 m-4">
        <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
        <div className="flex flex-col mb-4 ">
          <span className="mb-4">About us</span>
          <span className="mb-4">Keto Bakery</span>
          <span className="mb-4">FAQs</span>
          <span className="mb-4">Gift Cards</span>
          <span className="mb-4">Contact</span>
          <span className="mb-4">Keto Blog</span>
        </div>
      </div>
      <div className="md:w-4/12">
        <h2 className="font-semibold text-lg mb-4 m-4">Information</h2>
        <div className="flex flex-col m-4">
          <span className="mb-4">What Our Guests Are Saying</span>
          <span className="mb-4">Locations</span>
          <span className="mb-4">Return Policy</span>
          <span className="mb-4">Privacy Policys</span>
          <span className="mb-4">Shipping Policy</span>
          <span className="mb-4">Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
