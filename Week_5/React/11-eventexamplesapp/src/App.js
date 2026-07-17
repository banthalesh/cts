import EventExamples from "./Components/EventExamples";
import CurrencyConvertor from "./Components/CurrencyConvertor";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f4f8fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d6efd",
        }}
      >
       React Event Handling
      </h1>

      <EventExamples />

      <CurrencyConvertor />
    </div>
  );
}

export default App;