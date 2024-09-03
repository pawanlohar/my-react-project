import React, { useState } from 'react';

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
    <div className='container-fluid bg-success p-4 ' style={{ height: '100vh' }}>
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
          <button className="btn btn-secondary" onClick={countClear}>Clear</button>
        </div>
      </div>
    </div>

  );
}

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
