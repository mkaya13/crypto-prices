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
      <div className="main-page-title-details">
        <h2 className="crypto-detail-main-title">Details</h2>
      </div>
      <CryptoDetailsList cryptos={cryptos} />
    </div>
  );
};

export default { CryptoDetailsContainer };
