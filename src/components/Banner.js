import React from "react";
import SocialLinks from "./SocialLinks";
import logo from "../assets/images/ikkoikki.png";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
        <img alt="" src={logo} />
      <h2>
        ２０１９年８月４日 日曜日
      </h2>
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
