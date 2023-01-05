/* eslint-disable react/prop-types */
import React from 'react';

export default function CryptoDetails(props) {
  const { crypto } = props;
  const {
    name, symbol, marketCap, marketCapRank,
  } = crypto;

  return (
    <div>
      <li>
        <h1>{name}</h1>
        <h1>{symbol}</h1>
        <h1>{marketCap}</h1>
        <h1>{marketCapRank}</h1>
        <hr />
      </li>
    </div>
  );
}
