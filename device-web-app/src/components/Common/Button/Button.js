import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, text }) => {
  return (
    <button className="learn-more" type="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
};

export default Button;
