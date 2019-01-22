import React from "react";
import mapPicture from "../assets/images/map.png";
import parking from "../assets/images/parking.png";

const Place = () => (
  <div className="row place">
    <div className="three columns header-col">
      <h1>
        <span>交通・アクセス</span>
      </h1>
    </div>
            
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h5>
            <span>お車でお越しの方</span>
          </h5>
          <p>
          北陸自動車道小松ICから県道25号線を南へ約2km、県道20号線を東へ約3km、国道360号を東へ約19km、約40分
          </p>
          <div>
          <iframe frameBorder="0" style={{ width: "100%", height: "300"}} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2186.9196929387813!2d136.59865774755093!3d36.361900369945694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff85b5428472cbb%3A0xb02e0eada2d182bc!2z6YGT44Gu6aeFIOS4gOWQkeS4gOaPhuOBrumHjA!5e0!3m2!1sja!2sjp!4v1546160174163&zoom=12">
          </iframe>
          </div>
          <br />
          <h5>
            <span>駐車場情報</span>
          </h5>
          <p className="info">
          <p>
          周辺駐車場は大変混雑します。お早めの来場をお願いします。また午後8時〜9時の間、通行規制が行われますのでご注意ください。
          </p>
          <img className="map-pic" src={mapPicture} alt="" /><br />
          <img className="parking-pic" src={parking} alt="" /> 鳥越公民館<span>&nbsp;</span>約70台 会場まで徒歩約10分<br />
          <img className="parking-pic" src={parking} alt="" /> 大日土建(株)<span>&nbsp;</span>約60台 会場まで徒歩約10分<br />
          <img className="parking-pic" src={parking} alt="" /> 旧野球場<span>&nbsp;</span>約100台 会場まで徒歩約15分<br />
          <img className="parking-pic" src={parking} alt="" /> 鳥越福祉会<span>&nbsp;</span> 青い鳥 約70台 会場まで徒歩約20分<br />
          <img className="parking-pic" src={parking} alt="" /> 出合公民館付近<span>&nbsp;</span> 60台 会場まで徒歩約10分<br />
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Place;
