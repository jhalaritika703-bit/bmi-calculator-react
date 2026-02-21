import './App.css';
import './index.css';
import React, { useState } from 'react';

function App() {
  // State
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    const numWeight = Number(weight);
    const numHeight = Number(height);

    if (!numWeight || !numHeight) {
      alert('Please enter valid weight and height');
      return;
    }

    const bmiValue = (numWeight / (numHeight * numHeight)) * 703;
    setBmi(bmiValue.toFixed(1));

    // Correct BMI classification (WHO standard)
    if (bmiValue < 18.5) {
      setMessage('You are Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage('You have a Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage('You are Overweight');
    } else {
      setMessage('You are Obese');
    }
  };

  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>

        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (inches)</label>
            <input
              type="number"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>

            <button
              className="btn btn-outline"
              type="button"
              onClick={reload}
            >
              Reset
            </button>
          </div>
        </form>

        {bmi && (
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;