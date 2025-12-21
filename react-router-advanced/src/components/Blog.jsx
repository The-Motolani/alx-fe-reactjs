import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced Routing" },
    { id: 3, title: "Protected Routes" },
  ];

  return (
    <div>
      <h2>Blog</h2>

      {posts.map((post) => (
        <p key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default Blog;
