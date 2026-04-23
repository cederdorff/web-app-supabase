import { Link } from "react-router";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <div className="post-card-image">
        {post.image ? <img src={post.image} alt={post.caption} /> : <div className="image-placeholder">?</div>}
      </div>
      <div className="post-card-body">
        <h2>Post #{post.id}</h2>
        <p>{post.caption || "No caption yet."}</p>
      </div>
    </Link>
  );
}
