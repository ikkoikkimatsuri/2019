import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <div className="sponsor">協賛 </div>
        株式会社久盛建設工業/株式会社アイワホーム/株式会社石川コンピューターセンター/株式会社本田商会/株式会社小堀酒造店/ニューハウス工業株式会社/やまだ農場
        <br /><br />
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
