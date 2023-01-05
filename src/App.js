/* eslint-disable array-callback-return */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { CryptosContainer } from './components/Cryptos/CryptosContainer';
import { CryptoDetailsContainer } from './components/CryptoDetails/CryptoDetailsContainer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CryptosContainer />} />
      <Route path="https://crypto-market-4ovl.onrender.com/detail/:id" element={<CryptoDetailsContainer />}> </Route>
    </Routes>
  </Router>
);

export default App;
