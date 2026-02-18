import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LightCandle.css'


function LightCandle() {
  const { victimId } = useParams();
  const navigate = useNavigate();
  const [victim, setVictim] = useState(null);
  const [candleCount, setCandleCount] = useState(0);

  useEffect(() => {
    // Fake data - simulating what will come from database later
    const fakeVictims = [
      { id: 1, name: "Uyinene Mrwetyana", location: "Cape Town, South Africa" },
      { id: 2, name: "Tshegofatso Pules", location: "Johannesburg, South Africa" },
      { id: 3, name: "In memory of all whose names we don't know", location: "Worldwide" }
    ];
    
    const foundVictim = fakeVictims.find(v => v.id === parseInt(victimId));
    setVictim(foundVictim);
    
    // Simulate random number of people lighting candles
    setCandleCount(Math.floor(Math.random() * 50) + 1);
  }, [victimId]);

const handleClose = () => {
    navigate('/');
  };

  if (!victim) {
    return <div className="candle-page">Loading...</div>;
  }

  return (
    <div className="candle-page">
      <button className="close-btn" onClick={handleClose}>✕</button>

      <div className="candle-container">
        <h1 className="victim-name">{victim.name}</h1>
        <p className="victim-location">{victim.location}</p>
        
        <div className="flame-wrapper">
          <div className="candle-stick"></div>
          <div className="flame">
            <div className="flame-inner"></div>
          </div>
        </div>
        
        <p className="candle-message">
          You and <strong>{candleCount}</strong> others are lighting a candle for {victim.name}
        </p>
      </div>
    </div>
  );
}

export default LightCandle;