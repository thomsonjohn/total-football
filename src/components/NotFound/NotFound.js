import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>
        Uh oh! Something went wrong. The page you are looking for cannot be
        found.
      </h2>
      <p>
        <span role="img" aria-label="detective">
          🕵🏻‍♂️
        </span>{" "}
        <span role="img" aria-label="shrug">
          🤷🏻‍♂️
        </span>
      </p>
    </div>
  );
};

export default NotFound;
