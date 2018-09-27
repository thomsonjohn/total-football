import React from "react";

import "./ComingSoon.css";

const ComingSoon = props => {
  const { name } = props;

  return (
    <div className="coming-soon">
      <h2>
        {name} is still in development... <strong>watch this space!</strong>
      </h2>
      <p>
        <span role="img" aria-label="builder">
          👷🏻‍♂️
        </span>{" "}
        <span role="img" aria-label="eyes">
          👀
        </span>
      </p>
    </div>
  );
};

export default ComingSoon;
