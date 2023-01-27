/* eslint-disable array-callback-return */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { CryptosContainer } from './components/Cryptos/CryptosContainer';
import { CryptoDetailsContainer } from './components/CryptoDetails/CryptoDetailsContainer';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<CryptosContainer />} />
      <Route path="/detail/:id" element={<CryptoDetailsContainer />}> </Route>
    </Routes>
  </Router>
);

export default App;
