function BlogDetails() {
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
      <h2 style={{ color: "#198754" }}>📝 Blog Details</h2>

      <ul>
        <li>Title : React Hooks Guide</li>
        <li>Author : Deshma</li>
        <li>Category : Web Development</li>
      </ul>
    </div>
  );
}

export default BlogDetails;