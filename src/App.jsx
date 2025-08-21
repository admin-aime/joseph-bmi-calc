import React, { useState, useEffect } from 'react';
  import './index.css';

  function App() {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBMI);

      if (calculatedBMI < 18.5) setCategory('Underweight System');
      else if (calculatedBMI >= 18.5 && calculatedBMI < 25) setCategory('Optimal Performance');
      else if (calculatedBMI >= 25 && calculatedBMI < 30) setCategory('Overload Warning');
      else setCategory('Critical Mass Detected');
    };

    return (
      <>
        <div className="cyberpunk-background"></div>
        <div className="cityscape"></div>
        <div className="neon-grid"></div>

        <div className="container">
          <div className="bmi-calculator">
            <h1 style={{
              fontFamily: 'Orbitron, sans-serif', 
              textAlign: 'center', 
              color: 'var(--primary-neon)',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '3px'
            }}>
              Metabolic Index Terminal
            </h1>

            <div className="slider-container">
              <label style={{
                color: 'var(--primary-neon)', 
                marginBottom: '0.5rem', 
                display: 'block'
              }}>
                Height Calibration: {height} CM
              </label>
              <input 
                type="range"
                className="slider"
                min="100"
                max="250"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="slider-container">
              <label style={{
                color: 'var(--primary-neon)', 
                marginBottom: '0.5rem', 
                display: 'block'
              }}>
                Mass Configuration: {weight} KG
              </label>
              <input 
                type="range"
                className="slider"
                min="30"
                max="200"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button 
              onClick={calculateBMI}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(45deg, var(--primary-neon), var(--secondary-neon))',
                color: 'black',
                border: 'none',
                borderRadius: '10px',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginTop: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
            >
              Initialize Scan
            </button>

            {bmi && (
              <div className="result">
                <div className="bmi-value">{bmi}</div>
                <div className="bmi-category" style={{
                  color: 'var(--primary-neon)',
                  textShadow: '0 0 10px var(--primary-neon)'
                }}>
                  {category}
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  export default App;
