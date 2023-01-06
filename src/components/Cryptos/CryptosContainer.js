import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoList } from './CryptoList';
import { LoadCryptos } from '../../redux/cryptos/cryptos';
import { Footer } from '../Footer';
import '../../index.css';

export const CryptosContainer = () => {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(LoadCryptos());
  }, [dispatch]);

  return (
    <div className="all-content">
      <div className="main-box">
        <div className="main-title">
          <h1 className="my-title">
            Crypto Currencies
            &#40;
            {cryptos.length}
            &#41;
          </h1>
          <div className="search-field">
            <input
              type="text"
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="button" onChange={(e) => setSearch(e.target.value)}>Search</button>
          </div>
        </div>
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
        <h2 className="prices-title">
          Prices in terms of USD&nbsp;(
          <span className="USD">$</span>
          )
        </h2>
        <CryptoList cryptos={cryptos.filter((crypto) => (search.toLowerCase() === '' ? crypto : crypto.name.toLowerCase().includes(search.toLowerCase())))} />
      </div>
      <Footer />
    </div>
  );
};

export default { CryptosContainer };
