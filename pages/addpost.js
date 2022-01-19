import { useState } from "react";

import Nav from "../components/Layout/Nav";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");

    // fields check
    if (!title || !content) return setError("All fields are required");

    // post structure
    let post = {
      title,
      content,
      published: false,
      createdAt: new Date().toISOString()
    };
    // save the post
    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post)
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      setTitle("");
      setContent("");
      // set the message
      return setMessage(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };

  return (
    <div>
      <Nav />
      <div className="">
        <form onSubmit={handlePost}>
          {error ? (
            <div>
              <h3>{error}</h3>
            </div>
          ) : null}
          {message ? (
            <div>
              <h3>{message}</h3>
            </div>
          ) : null}
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="title"
            />
          </div>
          <div className="">
            <label>Content</label>
            <textarea
              name="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Post content"
            />
          </div>
          <div className="">
            <button type="submit">Add post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
