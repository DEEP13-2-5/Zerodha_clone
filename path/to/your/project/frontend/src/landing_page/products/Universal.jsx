import React from "react";

function Universal() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row">
          <div className="col-md-4 p-3">
            <img
              src="media/zerodhaFundhouse.png"
              alt="Zerodha Fundhouse"
              className="img-fluid"
            />
            <p className="text-small text-muted">
              Our asset management venture that creates simple and transparent
              index funds to help save for your goals.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <img
              src="media/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid"
            />
            <p className="text-small text-muted">
              Options trading platform to create strategies, analyze positions,
              and examine data points like open interest and more.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <img
              src="media/Capture.PNG"
              alt="Investment Research"
              className="img-fluid"
            />
            <p className="text-small text-muted">
              Investment research platform offering detailed insights on stocks,
              sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 p-3">
            <img
              src="media/streakLogo.png"
              alt="Streak"
              className="img-fluid"
            />
            <p className="text-small text-muted">Systematic trading platform</p>
          </div>
          <div className="col-md-4 p-3">
            <img
              src="media/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid"
            />
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
          <div className="col-md-4 p-3">
            <img src="media/dittoLogo.png" alt="Ditto" className="img-fluid" />
            <p className="text-small text-muted">
              Personal advice and health and medical insurance.
            </p>
          </div>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universal;
