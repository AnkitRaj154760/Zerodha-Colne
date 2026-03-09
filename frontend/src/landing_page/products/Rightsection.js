import React from "react";

function Rightsection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container border-bottom mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a
            href={learnMore}
            style={{ textDecoration: "none", color: "#387ed1" }}
          >
            Learn More <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>

        <div className="col-6 p-3">
          <img src={imageURL} alt="product" style={{ width: "100%" }} />
        </div>
         
      </div>
      
    </div>
  );
}

export default Rightsection;

