/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoList } from './CryptoList';
import { LoadCryptos } from '../../redux/cryptos/cryptos';
import { Footer } from '../Footer';
import { CryptoPages } from './CryptoPages';
import ScrollToTop from './ScrollToTop';
import Announcements from '../Announcements/Announcements';
import '../../index.css';

export const CryptosContainer = () => {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState('1');
  const [currentCurrency, setCurrenctCurrency] = useState('USD');
  const [params, setParams] = useState({ currency: currentCurrency, page: currentPage });

  const postComments = async (API_PATH) => {
    const fetchedData = await fetch(API_PATH, {
      method: 'POST',
      body: JSON.stringify({
        id: 'Btc',
        username: 'Mert',
        comment: 'Bull run is coming!',
      }),
    })
      .then((response) => response.json())
      .catch((error) => error);
    return fetchedData;
  };
  const postResp = postComments('https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/createcomment');
  console.log('Post response:', postResp);

  // ABOVE API CALLS

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setParams({ currency: currentCurrency, page: pageNumber });
  };

  const currinate = (currencyType) => {
    setCurrenctCurrency(currencyType);
    setParams({ currency: currencyType, page: currentPage });
  };

  useEffect(() => {
    dispatch(LoadCryptos(params));
  }, [dispatch, params, currentCurrency]);

  return (
    <div className="all-content">
      <Announcements />
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
            <button type="button" onChange={(e) => setSearch(e.target.value)}><i className="fas fa-search" /></button>
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
        <div className="prices-title" style={{ color: currentCurrency === 'USD' ? '#0aa756' : '#9fd9b6' }}>
          Prices in terms of
          {' '}
          {currentCurrency}
          &nbsp;(
          {currentCurrency === 'USD' ? '$' : '€'}
          )
          <select
            className="currency-in-terms-off"
            id="country"
            name="country"
            onChange={(event) => { currinate(event.target.value); }}
            value={currentCurrency}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <CryptoPages
          paginate={paginate}
          currentPage={currentPage}
        />
        <CryptoList currentCurrency={currentCurrency} cryptos={cryptos.filter((crypto) => (search.toLowerCase() === '' ? crypto : crypto.name.toLowerCase().includes(search.toLowerCase())))} />
      </div>
      <CryptoPages
        paginate={paginate}
        currentPage={currentPage}
      />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default { CryptosContainer };
