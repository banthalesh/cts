function IndianPlayers() {
  const players = ["Virat", "Rohit", "Gill", "Rahul", "Hardik", "Jadeja"];

  const [odd1, even1, odd2, even2, odd3, even3] = players;

  const t20Players = ["Surya", "Rinku", "Tilak"];
  const ranjiPlayers = ["Pujara", "Rahane", "Sarfaraz"];

  const merged = [...t20Players, ...ranjiPlayers];

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ color: "#0d6efd" }}>🔥 Odd Team Players</h2>

      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2 style={{ color: "#198754" }}>⭐ Even Team Players</h2>

      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2 style={{ color: "#dc3545" }}>🏏 Merged Players</h2>

      <ul>
        {merged.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;