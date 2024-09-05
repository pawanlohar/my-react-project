import React, { useState } from "react";

const Calculator = () => {
  const [weight, setWeight] = useState(0);
  const [heightFeet, setHeightFeet] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm"); // default unit
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const weightNum = parseFloat(weight);
    const heightFeetNum = parseFloat(heightFeet);
    const heightCmNum = parseFloat(heightCm);

    if (isNaN(weightNum) || weightNum <= 0) {
      alert("Please enter a valid weight");
      return;
    }

    let heightInMeters;

    if (heightUnit === "cm") {
      // Convert height from centimeters to meters
      heightInMeters = heightCmNum * 0.01;
    } else {
      // Convert height from feet to meters
      // Split heightFeet into feet and fractional part
      const [feet, fractionalFeet] = heightFeetNum.toString().split(".");
      const feetNum = parseFloat(feet);
      const fractionalFeetNum = parseFloat(fractionalFeet || "0");

      heightInMeters = (feetNum + fractionalFeetNum / 12) * 0.3048;
    }

    if (isNaN(heightInMeters) || heightInMeters <= 0) {
      alert("Please enter valid height");
      return;
    }

    // Calculate BMI
    const bmiValue = weightNum / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1)); // Set BMI rounded to one decimal place

    // Set appropriate message based on BMI value
    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are at a healthy weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }
  };

  const reload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div
      className="container-fluid bg-secondary py-5"
      style={{ height: "100vh" }}
    >
      <div className="container bg-light p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="d-flex justify-content-center">
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    className="form-control"
                    placeholder="Enter Your weight"
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="heightUnit" className="form-label">
                    Height Unit
                  </label>
                  <select
                    id="heightUnit"
                    className="form-select"
                    onChange={(e) => setHeightUnit(e.target.value)}
                    value={heightUnit}
                  >
                    <option value="cm">Centimeters</option>
                    <option value="feet">Feet</option>
                  </select>
                </div>
                {heightUnit === "cm" ? (
                  <div className="mb-3">
                    <label htmlFor="heightCm" className="form-label">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="heightCm"
                      className="form-control"
                      placeholder="Enter Your height in cm"
                      onChange={(e) => setHeightCm(e.target.value)}
                      required
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <label htmlFor="heightFeet" className="form-label">
                      Height (feet)
                    </label>
                    <input
                      type="number"
                      id="heightFeet"
                      className="form-control"
                      placeholder="Enter Your height in feet (e.g., 5.4)"
                      onChange={(e) => setHeightFeet(e.target.value)}
                      required
                    />
                  </div>
                )}
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
