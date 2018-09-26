import React from "react";

import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <h2>Uh oh! Something went wrong. Please try again in a few minutes.</h2>
      <p>
        <span role="img" aria-label="sweating">
          😓
        </span>
      </p>
    </div>
  );
};

export default Error;
