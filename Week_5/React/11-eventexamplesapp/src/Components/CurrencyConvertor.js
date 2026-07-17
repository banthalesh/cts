import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();

    this.state = {
      rupees: "",
      euro: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      rupees: event.target.value,
    });
  };

  handleSubmit = () => {
    const euro = (this.state.rupees / 90).toFixed(2);

    this.setState({
      euro,
    });
  };

  render() {
    return (
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ color: "#198754" }}>
          Currency Convertor
        </h2>

        <input
          type="number"
          placeholder="Enter Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />

        <button
          onClick={this.handleSubmit}
          style={{ marginLeft: "10px" }}
        >
          Convert
        </button>

        <h3>
          Euro : € {this.state.euro}
        </h3>
      </div>
    );
  }
}

export default CurrencyConvertor;