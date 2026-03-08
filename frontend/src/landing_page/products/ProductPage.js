import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <Leftsection
        imageURL="/media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and ios devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        appStroe=""
      />
      <Rightsection />
      <Leftsection
        imageURL="/media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and ios devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        appStroe=""
      />
      <Rightsection />
      <Leftsection
        imageURL="/media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        appStroe=""
      />
      
      <Universe />
    </>
  );
}

export default ProductPage;
