import React from "react";
import PropTypes from "prop-types";

export const App = ({ CounterApp }) => {
  return <>{CounterApp}</>;
};

App.propTypes = {
  CounterApp: PropTypes.element,
};
