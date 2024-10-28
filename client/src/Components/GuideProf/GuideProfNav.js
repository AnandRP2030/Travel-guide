import React from "react";
import { Link } from "react-router-dom";
import img9 from "../../img/logo.jpg";


function GuideProfNav() {
  return (
    <div>
      {/* <AdminHome/> */}
      <div
        className="container-fluid position-relative p-0"
      
      >
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3"></i><img src={img9} />Tourist Guide
            </h1>
            {/* <img src alt="Logo"/> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/GuideProfHome" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/AddPackage" className="nav-item nav-link">
                Package
              </Link>
              <Link to="/ViewGuidePack" className="nav-item nav-link">
                View Package
              </Link>
              <Link to="/guideViewBookings" className="nav-item nav-link">
                Bookings
              </Link>
              <Link to="/GuideProfView" className="nav-item nav-link">
                Profile
              </Link>
           
              

              
            </div>

          
          </div>
        </nav>
      </div>
    </div>
  );
}

export default GuideProfNav;
