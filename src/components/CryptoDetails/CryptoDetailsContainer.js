import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoDetailsList } from './CryptoDetailsList';
import { LoadCryptos } from '../../redux/cryptos/cryptos';

export const CryptoDetailsContainer = () => {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadCryptos());
  }, [dispatch]);

  return (
    <div className="crypto-items">
      <CryptoDetailsList cryptos={cryptos} />
    </div>
  );
};

export default { CryptoDetailsContainer };
