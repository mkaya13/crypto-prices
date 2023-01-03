/* eslint-disable react/prop-types */
import React from 'react';

export default function Crypto(props) {
  const { crypto } = props;
  const {
    id, symbol, name, image, currentPrice,
  } = crypto;

  return (
    <div>
      <li>
        <h1>{id}</h1>
        <h1>{symbol}</h1>
        <h1>{name}</h1>
        <h1>{image}</h1>
        <h1>{currentPrice}</h1>
        <hr />
      </li>
    </div>
  );
}
