import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright 2018 鳥越一向一揆まつり実行委員会</li><br /> 
          Design by{" "}<a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a><br /> 
          Developed in React by Aman Mittal
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
