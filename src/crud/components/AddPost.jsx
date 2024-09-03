import React from "react";
import PostForm from "./PostForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../api/posts";
import { v4 as uuidv4 } from "uuid";

const AddPost = () => {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      console.log("hello this done");
    },
  });

  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...post,
    });
  };
  return (
    <div className="mt-4">
      <h2 className="d-flex justify-content-center text-primary">
        Add New Post
      </h2>
      <PostForm onSubmit={handleAddPost} initialValue={{}} />
    </div>
  );
};

export default AddPost;
