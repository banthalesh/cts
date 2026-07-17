import { useState } from "react";

function ComplaintRegister() {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [complaint, setComplaint] = useState("");
  const [priority, setPriority] = useState("Priority 1");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const refNo = "CMP" + Math.floor(Math.random() * 100000);

    alert(
      `Complaint Registered Successfully!\n\nReference Number: ${refNo}`
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "30px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "green" }}>
          Complaint Submitted ✅
        </h2>

        <h3>Thanks, {name}</h3>

        <p>Your complaint was submitted successfully.</p>

        <h3>Employee ID : {employeeId}</h3>

        <h4>Priority : {priority}</h4>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d6efd",
        }}
      >
        Ticket Raising App
      </h1>

      <label><b>Employee Name</b></label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0 20px",
        }}
      />

      <label><b>Employee ID</b></label>

      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0 20px",
        }}
      />

      <label><b>Complaint</b></label>

      <textarea
        rows="4"
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0 20px",
        }}
      />

      <label><b>Priority</b></label>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0 20px",
        }}
      >
        <option>Priority 1</option>
        <option>Priority 2</option>
        <option>Priority 3</option>
      </select>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          background: "#198754",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Submit Complaint
      </button>
    </form>
  );
}

export default ComplaintRegister;