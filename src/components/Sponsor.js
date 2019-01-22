import React from "react";
import hisamori from "../assets/images/sponsor/hisamori.png";
import aiwahome from "../assets/images/sponsor/aiwahome.png";
import hondashokai from "../assets/images/sponsor/hondashokai.png";
import icc from "../assets/images/sponsor/icc.png";
import manzairaku from "../assets/images/sponsor/manzairaku.png";
import newhouse from "../assets/images/sponsor/newhouse.png";
import yamadanojo from "../assets/images/sponsor/yamadanojo.png";

const Sponsor = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>協賛企業</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns"></div>
          <p>
          <img className="sponsor" src={hisamori} alt="" />
          <img className="sponsor" src={aiwahome} alt="" />
          <img className="sponsor" src={icc} alt="" />
          <img className="sponsor" src={hondashokai} alt="" />
          <img className="sponsor" src={manzairaku} alt="" />
          <img className="sponsor" src={newhouse} alt="" />
          <img className="sponsor" src={yamadanojo} alt="" />
          and more...
          </p>
        </div>
    </div>
  </div>
);

export default Sponsor;
