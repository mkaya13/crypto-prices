import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoList } from './CryptoList';
import { LoadCryptos } from '../../redux/cryptos/cryptos';
import '../../index.css';

export const CryptosContainer = () => {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadCryptos());
  }, [dispatch]);

  return (
    <div className="all-content">
      <div className="main-box">
        <h1>
          Crypto Currencies
          &#40;
          {cryptos.length}
          &#41;
        </h1>
        <div className="crypto-logos">
          {cryptos
            && cryptos.map((crypto) => (
              <img
                className="all-cryptos-logo-img"
                key={crypto.id}
                src={crypto.image}
                alt={crypto.image}
              />
            ))}
        </div>
      </div>
      <div className="crypto-items">
        <h2 className="prices-title">Prices in terms of USD&nbsp;($)</h2>
        <CryptoList cryptos={cryptos} />
      </div>
    </div>
  );
};

export default { CryptosContainer };
