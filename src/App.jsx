import React from "react";
import { Route, Routes } from "react-router-dom";
import ToDoList from "./todolist/components/ToDoList.jsx";
import Count from "./count/components/Count.jsx";
import Calculator from "./calculator/components/Calculator.jsx";
import Crud from "./crud";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Count />} />
      <Route path="/todolist" element={<ToDoList />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/crud/*" element={<Crud />} />
    </Routes>
  );
}
