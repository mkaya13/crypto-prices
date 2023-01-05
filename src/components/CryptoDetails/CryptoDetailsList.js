/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import CryptoDetails from './CryptoDetails';

export const CryptoDetailsList = (props) => {
  const { cryptos } = props;
  const params = useParams();

  console.log(params.id);

  const myChoose = [...cryptos.filter((crypto) => crypto.id === params.id)];

  return (
    <ul className="each-crypto-table">
      {myChoose
        && myChoose.map((crypto) => (
          <CryptoDetails key={crypto.id} crypto={crypto} />
        ))}
    </ul>
  );
};

export default CryptoDetailsList;
