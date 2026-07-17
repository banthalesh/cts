import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      alert("Name should contain at least 5 characters.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Enter a valid Email Address.");
      return;
    }

    if (password.length < 8) {
      alert("Password should contain at least 8 characters.");
      return;
    }

    alert("Registration Successful!");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "420px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        background: "white",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#0d6efd" }}>
        Mail Registration
      </h2>

      <label><b>Name</b></label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        style={inputStyle}
      />

      <label><b>Email</b></label>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        style={inputStyle}
      />

      <label><b>Password</b></label>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        style={inputStyle}
      />

      <button style={buttonStyle}>
        Register
      </button>
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0 20px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#198754",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Register;