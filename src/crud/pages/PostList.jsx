import React from "react";
import AddPost from "../components/AddPost";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../../api/posts";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleDelete = (id) => {
    deletePostMutation.mutate(id);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <AddPost />
      <div className="container bg-primary py-4 rounded">
        {posts.map((post) => (
          <div key={post.id} className=" mt-4 ">
            <div className="row px-3">
              <div className="col-12 bg-white rounded d-flex align-items-center  m-2 text-capitalize">
                <h4
                  onClick={() => navigate(`/crud/post/${post.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {post.title}
                </h4>
              </div>
              <div className="col-12 d-grid gap-2">
                <button
                  className="btn bg-secondary"
                  onClick={() => navigate(`/crud/post/${post.id}/edit`)}
                >
                  edit
                </button>
                <button
                  className="btn bg-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
