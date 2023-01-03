import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoList } from './CryptoList';
import { LoadCryptos } from '../../redux/cryptos/cryptos';

export const CryptosContainer = () => {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadCryptos());
  }, [dispatch]);

  return (
    <div className="crypto-items">
      <CryptoList cryptos={cryptos} />
    </div>
  );
};

export default { CryptosContainer };
