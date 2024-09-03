import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PostForm = ({ onSubmit, initialValue }) => {
  const [post, setPost] = useState({
    title: initialValue.title || "",
    body: initialValue.body || "",
  });

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      title: "",
      body: "",
    });
  };
  const renderField = (label) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        onChange={handleChangeInput}
        type="text"
        className="form-control"
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
      />
    </div>
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-success">Post Form</h1>
      <form onSubmit={handleSubmit} className="py-4">
        {renderField("Title")}
        {renderField("Body")}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
