import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future: <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default App;
