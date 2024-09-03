import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../../api/posts";
import { useQuery } from "@tanstack/react-query";

const Post = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="container py-4" style={{ height: "92.2vh" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className="btn btn-info" onClick={() => navigate("/crud")}>
          Back to List
        </button>
        <h1 className="text-center">Post Details</h1>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm border-light">
            <div className="card-body">
              <h2 className="card-title text-capitalize">{post.title}</h2>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
