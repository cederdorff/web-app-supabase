import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import PostForm from "../components/PostForm";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json"
};

export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function loadPost() {
      const response = await fetch(`${URL}?id=eq.${id}`, { headers });
      const data = await response.json();
      setPost(data[0]);
    }

    loadPost();
  }, [id]);

  async function handleSubmit(postData) {
    await fetch(`${URL}?id=eq.${id}`, { method: "PATCH", headers, body: JSON.stringify(postData) });
    navigate(`/posts/${id}`);
  }

  if (!post) return <p className="status-msg">Loading...</p>;

  return (
    <main className="app">
      <h1 className="page-title">Update Post</h1>
      <PostForm onSubmit={handleSubmit} postToUpdate={post} />
    </main>
  );
}
