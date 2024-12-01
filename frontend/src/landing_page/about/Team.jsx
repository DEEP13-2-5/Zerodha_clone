import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  p-5 mt-5">
        <h1 className="text-center">People</h1>
        <div className="col-6 p-5 text-center">
          <img
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "50%", height: "70%" }}
          ></img>
          <p>Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome
            <br></br>
            the hurdles he faced during his decade long stint as a trader.
          </p>
          <br></br>
          <p>
            Today, Zerodha has changed the landscape of the Indian broking
            industry. Heis a member
            <br></br>
            of the SEBI Secondary Market Advisory Committee (SMAC) and the
            Market Data Advisory Committee (MDAC).
          </p>
          <br></br>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
