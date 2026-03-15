import React from "react";

function Universe() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center">

        <h1 className="mt-5">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/media/smallcaseLogo.png" alt="smallcase" className="logo" />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/media/streakLogo.png" alt="streak" style={{width: "140px"}} className="logo" />
          <p className="text-muted">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/media/sensibullLogo.svg" alt="sensibull"style={{width: "140px"}} className="logo" />
          <p className="text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/media/zerodhaFundhouse.png" alt="zerodha fund house" style={{width: "260px"}} className="logo" />
          <p className="text-muted">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/media/goldenpiLogo.png" alt="goldenpi" className="logo" />
          <p className="text-muted">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/media/dittoLogo.png" alt="ditto" style={{width: "140px"}} className="logo" />
          <p className="text-muted">Insurance</p>
        </div>

      </div>

      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary px-4">Sign up now</button>
      </div>

    </div>
  );
}

export default Universe;