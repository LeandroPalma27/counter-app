import { string } from "prop-types";
import React, { Component } from "react";

type CCStateProps = {
  apellido?: string
}

export default class CCState extends Component<CCStateProps> {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      nombre: 'Leandro',
      value: 0
    };
  }
  addNumber = () => {
    this.setState({value: this.state.value + 1});
  }
  render() {
    return <>
    <h3>{this.state.nombre}</h3>
      <div>{this.state.value}</div>
      <button onClick={this.addNumber}>Click</button>
    </>;
  }
}
