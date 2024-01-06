import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

  const [counter, setState] = useState(value);

  const handleValue = () => {
    setState(counter + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleValue}>+1 (FUNCTIONAL COMPONENT)</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
