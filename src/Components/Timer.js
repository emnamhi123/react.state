import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      intervall: null,
    };
  }
  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ counter: this.state.counter + 1 }),
        1000
      ),
    });
  }
  render() {
    return <div> {this.state.counter}</div>;
  }
}

export default Timer;
