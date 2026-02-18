import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import MemorialScroll from './components/MemorialScroll';
import SubmissionForm from './components/SubmissionForm';
import LightCandle from './components/LightCandle';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<MemorialScroll />} />
          <Route path="/submit" element={<SubmissionForm />} />
          <Route path="/candle/:victimId" element={<LightCandle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;