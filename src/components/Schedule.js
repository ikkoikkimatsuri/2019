import React from "react";

const Schedule = () => (
  <div className="row schedule">
    <div className="three columns header-col">
      <h1><span>開催要綱</span></h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <p className="info">
          </p>

          <table className="tb-outline">
            <tbody>
            <tr><th>名称</th><td>鳥越一向一揆まつり</td></tr>
            <tr><th>開催日時</th><td>２０１９年８月４日（日）１４:３０〜２１:００</td></tr>
            <tr><th>会場</th><td>道の駅 一向一揆の里 周辺</td></tr>
            <tr><th>主催</th><td>一向一揆まつり実行委員会</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Schedule;
