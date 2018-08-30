import React from "react";
import "./Loading.css";

import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="loading">
      <Loader type="Oval" color="seagreen" height={80} width={80} />
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoaderSpinner;
