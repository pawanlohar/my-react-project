import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Count = () => {
  const [counts, setCounts] = useState([0, 0]);

  function updateCount(index, newCount) {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
  }

  function countClear() {
    setCounts([0, 0]);
  }

  const totalCount = counts.reduce((acc, count) => acc + count, 0);

  return (
    <div
      className="container-fluid bg-success p-4 "
      style={{ height: "100vh" }}
    >
      <div className="container mt-5 ">
        <h1 className="text-center mb-4">Counters that update separately</h1>
        <div className="row justify-content-center mb-4">
          <div className="col-auto">
            <MyButton index={0} count={counts[0]} updateCount={updateCount} />
          </div>
          <div className="col-auto">
            <MyButton index={1} count={counts[1]} updateCount={updateCount} />
          </div>
        </div>

        <div className="text-center mb-4">
          <h1 className="text-primary">
            Total Count: <span className="text-danger">{totalCount}</span>
          </h1>
        </div>

        <div className="text-center">
          <button className="btn btn-secondary" onClick={countClear}>
            Clear
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center g-4 mt-5">
        <button className="btn btn-danger mx-2">
          <a href="/Calculator" className="text-decoration-none">
            BMI Calaculator
          </a>
        </button>
        <button className="btn btn-info mx-2">
          <a href="/crud" className="text-decoration-none">
            CRUD
          </a>
        </button>
        <button className="btn btn-dark mx-2">
          <a href="/todolist" className="text-decoration-none">
            ToDoList
          </a>
        </button>
      </div>
    </div>
  );
};

function MyButton({ index, count, updateCount }) {
  function handleClick() {
    updateCount(index, count + 1);
  }

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default Count;
