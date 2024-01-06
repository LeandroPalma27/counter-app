import { string } from "prop-types";
import React, { Component } from "react";

type CCStateProps = {
  nombre?: string,
  apellido?: string,
  value?: number
}

export default class CCState extends Component<CCStateProps> {
  state = {
    value: 0,
    nombre: 'Leandro'
  }

  constructor(props) {
    super(props);
  }

  addNumber = () => {
    this.setState({value: this.state.value + 1});
  }

  render() {
    return <>
    <h3>{this.state.nombre}</h3>
      <div>{this.state.value}</div>
      <button onClick={this.addNumber}>+1 (CLASS COMPONENT)</button>
    </>;
  }
}
