function CourseDetails() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px 0",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
      }}
    >
      <h2 style={{ color: "#dc3545" }}>🎓 Course Details</h2>

      <ul>
        <li>Course : React JS</li>
        <li>Duration : 8 Weeks</li>
        <li>Trainer : John Smith</li>
      </ul>
    </div>
  );
}

export default CourseDetails;