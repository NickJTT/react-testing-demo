import React, { Component } from 'react';

export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  setNumber(value) {
    this.setState({ number: value });
  }

  getNumber() {
    return 1;
  }
  
  render() {
    return <React.Fragment/>;
  }
}
