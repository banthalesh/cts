import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const flag = false; // Change to false for second output

  return (
    <div
      style={{
        backgroundColor: "#f4f8fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d6efd",
          marginBottom: "30px",
        }}
      >
        🏏 Cricket Players Dashboard
      </h1>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;