/* eslint-disable react/prop-types */
import React from 'react';
import Crypto from './Crypto';

export const CryptoList = (props) => {
  const { cryptos, currentCurrency } = props;

  return (
    <ul className="each-crypto-ul">
      {cryptos
        && cryptos.map((crypto) => (
          <Crypto
            key={crypto.id}
            crypto={crypto}
            currentCurrency={currentCurrency}
          />
        ))}
    </ul>
  );
};

export default CryptoList;
