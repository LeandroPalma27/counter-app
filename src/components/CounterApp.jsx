import React, { useState } from "react";
import PropTypes from "prop-types";

const [counter, setState] = useState(value);

const handleValue = () => {
  setState(counter + 1);
};

const handleSubstract = () => {
  setState(counter -1);
}

const handleReset = () => {
  setState(0);
}

export const CounterApp = ({ value }) => {

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleValue}>+1 (FUNCTIONAL COMPONENT)</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
