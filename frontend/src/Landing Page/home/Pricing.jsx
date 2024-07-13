import React from "react";

const Pricing = () => {
  return (
    <div className="container p-2">
      <div className="row p-5">
        <div className="col-5 p-3">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long mx-0"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-4">₹0</h1>
              <p>Free equity delivery and<br/> direct mutual funds</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-4">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
