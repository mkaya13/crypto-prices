import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CryptosContainer } from './components/Cryptos/CryptosContainer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CryptosContainer />} />
    </Routes>
  </Router>
);

export default App;
