import React from "react";

function Footer() {
  return (

    <div className="container-fluid border-top mt-5"
    style={{backgroundColor:"rgb(250,250,250)"}}>

      <div className="container">

        <div className="row mt-5">

          <div className="col">
            <img src="media/logo.svg" style={{width:"50%"}} alt="logo"/>
            <p>
              ©2010-2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p><b>Company</b></p>
            <a href="">About</a><br/>
            <a href="">Products</a><br/>
            <a href="">Pricing</a><br/>
            <a href="">Referral Programme</a><br/>
            <a href="">Careers</a><br/>
            <a href="">Zerodha.tech</a><br/>
            <a href="">Press & media</a><br/>
            <a href="">Zerodha cares (CSR)</a>
          </div>

          <div className="col">
            <p><b>Support</b></p>
            <a href="">Contact</a><br/>
            <a href="">Support portal</a><br/>
            <a href="">Z-connect blog</a><br/>
            <a href="">List of charges</a><br/>
            <a href="">Downloads & resources</a>
          </div>

          <div className="col">
            <p><b>Account</b></p>
            <a href="">Open an account</a><br/>
            <a href="">Fund transfer</a><br/>
            <a href="">60 day challenge</a>
          </div>

        </div>

        <div className="mt-5 small text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.: INZ000031633.
          </p>

          <p>
            Investments in securities market are subject to market risks.
          </p>
        </div>

        <div className="mt-3 pb-4">
          <a href="#" className="me-3">NSE</a>
          <a href="#" className="me-3">BSE</a>
          <a href="#" className="me-3">MCX</a>
          <a href="#" className="me-3">Terms & conditions</a>
          <a href="#" className="me-3">Policies & procedures</a>
          <a href="#" className="me-3">Privacy policy</a>
          <a href="#" className="me-3">Disclosure</a>
        </div>

      </div>

    </div>
  );
}

export default Footer;