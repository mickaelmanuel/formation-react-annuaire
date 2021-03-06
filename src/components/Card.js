import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2 className="card--title">{title}</h2>
      <div className="card--container">{children}</div>
    </div>
  );
};

export default Card;
