import React from 'react';
import Entry from './views/Entry/Entry';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Entry />} />
      </Routes>
    </Router>
  );
}

export default App;