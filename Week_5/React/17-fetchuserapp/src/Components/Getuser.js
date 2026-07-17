import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      firstName: "",
      picture: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();

    this.setState({
      title: data.results[0].name.title,
      firstName: data.results[0].name.first,
      picture: data.results[0].picture.large,
    });
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Arial",
        }}
      >
        <h1 style={{ color: "#0d6efd" }}>
          Random User Details
        </h1>

        <img
          src={this.state.picture}
          alt="User"
          style={{
            width: "180px",
            borderRadius: "50%",
            border: "4px solid #0d6efd",
          }}
        />

        <h2 style={{ marginTop: "20px" }}>
          {this.state.title} {this.state.firstName}
        </h2>
      </div>
    );
  }
}

export default Getuser;