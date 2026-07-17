import React, { Component } from "react";

class EventExamples extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  sayHello = () => {
    alert("Hello! Welcome to React Event Handling.");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleClick = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#0d6efd" }}>
          Event Handling Example
        </h2>

        <h1>{this.state.counter}</h1>

        <button onClick={this.increase}>Increment</button>

        <button
          onClick={this.decrement}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>

        <br />
        <br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <button
          onClick={this.handleClick}
          style={{ marginLeft: "10px" }}
        >
          OnPress
        </button>
      </div>
    );
  }
}

export default EventExamples;