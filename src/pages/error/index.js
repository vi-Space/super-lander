import React, { Component } from "react";

const style = {
  width: "100vw",
  maxWidth: "100%",
  textAlign: "center",
};

class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Error;
