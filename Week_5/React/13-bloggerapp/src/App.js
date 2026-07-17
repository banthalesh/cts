import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBook = true;
  const showBlog = true;
  const showCourse = true;

  // 1. IF ELSE
  let bookComponent;

  if (showBook) {
    bookComponent = <BookDetails />;
  } else {
    bookComponent = <h3>No Book Details</h3>;
  }

  return (
    <div
      style={{
        background: "#f4f8fb",
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
        📖 Blogger App
      </h1>

      {/* IF ELSE */}
      {bookComponent}

      {/* TERNARY */}
      {showBlog ? <BlogDetails /> : <h3>No Blog Details</h3>}

      {/* LOGICAL && */}
      {showCourse && <CourseDetails />}
    </div>
  );
}

export default App;