import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="images/largestBroker.svg" />
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className="mt-2">Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Futures and options</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Futures and options</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="images/pressLogos.png" className="mt-4" style={{width: '95%'}}/>
        </div>
      </div>
    </div>
  );
};

export default Awards;
