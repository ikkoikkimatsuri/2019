import React from "react";

import Mantoka1 from "../assets/images/image/001.jpg";
import Mantoka2 from "../assets/images/image/002.jpg";
import Hanabi from "../assets/images/image/003.jpg";
import Taiko from "../assets/images/image/004.jpg";
import Mantoka3 from "../assets/images/image/005.jpg";
import Odori from "../assets/images/image/006.jpg";
import Yomise from "../assets/images/image/007.jpg";
import Taiko2 from "../assets/images/image/008.jpg";

const Image = () => (
  <section id="image">
    <div className="row">
      <div className="twelve columns collapsed">
      
        <div
          id="image-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Mantoka1} />
            </div>
          </div>

          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Hanabi} />
            </div>
          </div>

          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Taiko} />
            </div>
          </div>

          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Mantoka2} />
            </div>
          </div>

          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Mantoka3} />
            </div>
          </div>

          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Odori} />
            </div>
          </div>

          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Yomise} />
            </div>
          </div>

          <div className="columns image-item">
            <div className="item-wrap">
              <img alt="" src={Taiko2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Image;
