import React from 'react';
import PropTypes from 'prop-types';
import Crypto from './Crypto';

export const CryptoList = (props) => {
  const { cryptos } = props;

  return (
    <ul className="each-crypto-ul">
      {cryptos
        && cryptos.map((crypto) => <Crypto key={crypto.id} crypto={crypto} />)}
    </ul>
  );
};

CryptoList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cryptos: PropTypes.array.isRequired,
};

export default CryptoList;
