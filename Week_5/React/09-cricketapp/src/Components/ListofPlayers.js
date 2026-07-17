function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 98 },
    { name: "Rohit Sharma", score: 86 },
    { name: "Shubman Gill", score: 65 },
    { name: "KL Rahul", score: 72 },
    { name: "Hardik Pandya", score: 50 },
    { name: "Ravindra Jadeja", score: 76 },
    { name: "R Ashwin", score: 48 },
    { name: "Mohammed Shami", score: 35 },
    { name: "Jasprit Bumrah", score: 40 },
    { name: "Mohammed Siraj", score: 60 },
    { name: "Kuldeep Yadav", score: 55 },
  ];

  const below70 = players.filter((player) => player.score < 70);

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ color: "#198754" }}>🏆 Player Scores</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ backgroundColor: "#0d6efd", color: "white" }}>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
              }}
            >
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ color: "#dc3545", marginTop: "30px" }}>
        ❌ Players Below 70
      </h2>

      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - <b>{player.score}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;