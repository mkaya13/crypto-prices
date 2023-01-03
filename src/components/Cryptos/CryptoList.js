/* eslint-disable react/prop-types */
import React from 'react';
import Crypto from './Crypto';

export const CryptoList = (props) => {
  const { cryptos } = props;

  return (
    <ul className="each-crypto-table">
      {cryptos
        && cryptos.map((crypto) => <Crypto key={crypto.id} crypto={crypto} />)}
    </ul>
  );
};

export default CryptoList;
