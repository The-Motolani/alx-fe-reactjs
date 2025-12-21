import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h3>Blog Post ID: {postId}</h3>
      <p>This page was loaded dynamically using URL params.</p>
    </div>
  );
};

export default BlogPost;
