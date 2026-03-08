import React from "react";

function Leftsection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  GooglePlay,
  appStroe,
}) {
  return (
    <div className="container border-bottom mb-5">
      <div className="row">

        <div className="col-6 p-3">
          <img src={imageURL} alt="product" style={{ width: "100%" }} />
        </div>

        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <a 
            href={tryDemo} 
            style={{ textDecoration: "none", marginRight: "80px", color:"#387ed1" }}
          >
            Try Demo <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

          <a 
            href={learnMore} 
            style={{ textDecoration: "none", color:"#387ed1" }}
          >
            Learn More <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

          <div className="mt-3">
            <a href={GooglePlay}>
              <img src="/media/googlePlayBadge.svg" alt="Google Play" />
            </a>

            <a href={appStroe} style={{ marginLeft: "30px" }}>
              <img src="/media/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Leftsection;