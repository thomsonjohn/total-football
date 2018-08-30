import React from "react";
import "./Error.css";

import errorImage from "../../assets/img/oops.jpg";

const Error = () => {
  return (
    <div className="error">
      <p className="error-text">
        Oops! Something went wrong{" "}
        <span role="img" aria-label="oops">
          😓
        </span>
      </p>
      <img className="error-img" src={errorImage} alt="Neymar" />
      <p className="error-text">Try again later</p>
    </div>
  );
};

export default Error;
