import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPost, updatePost } from "../../api/posts";

const EditPost = () => {
  const queryClient = useQueryClient();

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

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/crud");
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({ id, ...updatedPost });
  };

  console.log(post);
  return (
    <div className="container mt-4" style={{ height: "88.8vh" }}>
      <h1 className="d-flex justify-content-center text-primary">
        Edit Post Form
      </h1>
      <PostForm onSubmit={handleSubmit} initialValue={post} />
    </div>
  );
};

export default EditPost;
