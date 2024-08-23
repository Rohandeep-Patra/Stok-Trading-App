import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container p-2">
          <a class="navbar-brand" href="#">
            <img src="images/logo.svg" style={{ width: "20%" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active text-muted fw-normal" aria-current="page" href="#">
                    Sign Up
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted fw-normal" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted fw-normal" href="#">
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted fw-normal" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted fw-normal" href="#">
                    Support
                  </a>
                </li>
                
               
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
