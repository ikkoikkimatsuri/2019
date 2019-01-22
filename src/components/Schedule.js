import React from "react";

const Schedule = () => (
  <div className="row schedule">
    <div className="three columns header-col">
      <h1><span>スケジュール</span></h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>２０１８年８月４日（日）</h3>
          <h5><span>メイン会場（道の駅 一向一揆の里）</span></h5>
          <p className="info">
            <em className="date">15:00 〜 21:00</em><span>&nbsp;</span>夜店<br />
            <em className="date">16:00 〜 16:30</em><span>&nbsp;</span>オープニングイベント<br />
            <em className="date">16:30 〜 17:00</em><span>&nbsp;</span>鶴来高校 ジャズバンド部<br />
            <em className="date">17:00 〜 17:30</em><span>&nbsp;</span>鳥越小学校 高学年合唱<br />
            <em className="date">18:00 〜 19:00</em><span>&nbsp;</span>追悼式<br />
            <em className="date">19:00 〜 19:15</em><span>&nbsp;</span>桶太鼓<br />
            <em className="date">19:40 〜 20:20</em><span>&nbsp;</span>踊りの夕べ<br />
          </p>
          <h5><span>メイン会場横 特設会場</span></h5>
          <p className="info">
            <em className="date">15:00 〜 17:00</em><span>&nbsp;</span>一向一揆 〜夏の陣〜<br />
          </p>
          <h5><span>鳥越万灯華会場（であいふれあい公園）</span></h5>
          <p className="info"><em className="date">18:00 〜 21:00</em><span>&nbsp;</span>鳥越万灯華
          <p className="kome"> ※約1万本のろうそくの灯により幽玄の世界を演出します。</p>
          </p>
          <h5><span>二曲平野周辺</span></h5>
          <p className="info">
            <em className="date">20:30 〜 20:50</em><span>&nbsp;</span>北國花火大会<br />
            <p className="kome"> ※会場周辺であればどこからでもご覧いただけます。</p>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Schedule;
