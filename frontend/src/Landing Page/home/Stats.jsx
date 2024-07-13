import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className="mb-5 ">Start with confidence</h1>

          <h4 className="mt-4">Customer-first always</h4>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            worth of equity investments.
          </p>

          <h4 className="mt-4">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h4 className="mt-4">The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 40+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="mt-4">Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <img src="images/ecosystem.png" style={{ width: "95%" }}/>
          <div className="text-center">
            <a href="" className="mx-5" style={{textDecoration: "none"}}>
              Explore our products
              <i class="fa-solid fa-arrow-right-long mx-2"></i>
            </a>
            <a href="" className="" style={{textDecoration: "none"}}>
              Try Kite demo
              <i class="fa-solid fa-arrow-right-long mx-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
