import React, { Component } from "react";

class Option extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleDecrement = () => {
    if (this.state.count === 0) {
      this.setState({ count: this.state.count });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        {this.state.count} {this.props.opt}
        <button onClick={this.handleIncrement}> + </button>{" "}
        <button onClick={this.handleDecrement}> - </button>{" "}
      </div>
    );
  }
}

export default Option;
