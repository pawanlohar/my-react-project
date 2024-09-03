import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import "bootstrap/dist/css/bootstrap.min.css";

const Crud = () => {
  return (
    <div
      className="container-fluid bg-danger h-auto"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-7">
            <div className="d-flex justify-content-center">
              <h1>Awesome Blog</h1>
            </div>
            <div>
              <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/post/:id/edit" element={<EditPost />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
