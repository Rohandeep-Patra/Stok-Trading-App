import React from "react";

const Education = () => {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-2">
          <img src="images/education.svg" />
        </div>
        <div className="col-6 p-3 pt-5">
          <h3 className="mb-3">Free and open market education</h3>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right-long mx-0"></i>
          </a>

          <p className="text-muted mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right-long mx-0"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
