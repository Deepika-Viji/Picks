import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="main-content p-0">
      <div className="panel under-construction-panel">
        <div className="panel-body h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="part-img">
            <img src="assets/images/under-construction.png" alt="coming-soon" />
          </div>
          <div className="part-txt">
            <h2>Under Construction</h2>
            <p>To make things right we need some time to rebuild</p>
            <Link
              to="/"
              className="btn btn-primary py-2 px-5 rounded-pill"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
