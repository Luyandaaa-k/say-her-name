import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MemorialScroll from './components/MemorialScroll';
import SubmissionForm from './components/SubmissionForm';
import LightCandle from './components/LightCandle';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <SubmissionForm />
              <MemorialScroll />
            </>
          } />
          <Route path="/candle/:victimId" element={<LightCandle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;