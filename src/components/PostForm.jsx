import { useState } from "react";
import { useNavigate } from "react-router";

export default function PostForm({ onSubmit, postToUpdate }) {
  const [image, setImage] = useState(postToUpdate?.image || "");
  const [caption, setCaption] = useState(postToUpdate?.caption || "");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ image, caption });
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            placeholder="https://..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {image && <img src={image} alt="Preview" className="image-preview" />}
        </div>
        <div className="form-field">
          <label htmlFor="caption">Caption *</label>
          <textarea
            id="caption"
            name="caption"
            rows="4"
            placeholder="Write a caption for your post..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {postToUpdate ? "Update post" : "Create post"}
        </button>
      </div>
    </form>
  );
}
