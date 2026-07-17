function BookDetails() {
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
      <h2 style={{ color: "#0d6efd" }}>📚 Book Details</h2>

      <ul>
        <li>Book : React Explained</li>
        <li>Author : Zac Gordon</li>
        <li>Price : ₹699</li>
      </ul>
    </div>
  );
}

export default BookDetails;