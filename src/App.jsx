import React, { useState } from 'react';
  import './index.css';

  function App() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
      if (height && weight) {
        const heightInMeters = height / 100;
        const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        setBmi(calculatedBMI);

        if (calculatedBMI < 18.5) setCategory('Underweight');
        else if (calculatedBMI >= 18.5 && calculatedBMI < 25) setCategory('Normal');
        else if (calculatedBMI >= 25 && calculatedBMI < 30) setCategory('Overweight');
        else setCategory('Obese');
      }
    };

    return (
      <div className="bmi-calculator">
        <div className="input-group">
          <label htmlFor="height">Height (cm)</label>
          <input 
            type="number" 
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <div className="input-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input 
            type="number" 
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <button 
          className="calculate-btn" 
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="result">
            <div className="bmi-value">{bmi}</div>
            <div className={`bmi-category category-${category.toLowerCase()}`}>
              {category} BMI
            </div>
          </div>
        )}
      </div>
    );
  }

  export default App;
