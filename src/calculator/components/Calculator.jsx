import React, { useState } from "react";

const Calculator = () => {

  const [weight, setWeight] = useState(0);

  const [height, setHeight] = useState(0);

  const [bmi, setBmi] = useState("");

  const [message, setMessage] = useState("");



  let calcBmi = (e) => {
    event.preventDefault(); // Use 'e' for event

    // Ensure weight and height are numbers and not zero
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert('Please enter valid weight and height');
      return;
    }

    // Calculate BMI
    let bmi = (weightNum * 703) / (heightNum * heightNum);
    setBmi(bmi.toFixed(1)); // Set BMI rounded to one decimal place

    // Set appropriate message based on BMI value
    if (bmi < 18.5) {
      setMessage('You are underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('You are at a healthy weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage('You are overweight');
    } else {
      setMessage('You are obese');
    }
  };


  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="container-fluid bg-secondary py-5" style={{ height: '100vh' }}>
      <div className="container bg-light p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="d-flex justify-content-center">
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label">Weight (lbs)</label>
                  <input 
                    type="number"
                    id="weight"
                    className="form-control"
                    placeholder="Enter Your value"
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="height" className="form-label">Height (in)</label>
                  <input
                    type="number"
                    id="height"
                    className="form-control"
                    placeholder="Enter Your value"
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" type="submit">
              Calculate
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={reload}
            >
              Reload
            </button>
          </div>
          <div className="mt-4">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>


  );
};

export default Calculator;
