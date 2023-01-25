import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../index.css';

export default function Crypto(props) {
  const { crypto, currentCurrency } = props;

  // const managePricePercentageChange = (pricePercentage) => {
  //   pricePercentage > 0 ?
  // }

  return (
    <Link className="main-page-each-crypto" to={`/detail/${crypto && crypto.id}`}>
      <li>
        <div className="main-page-each-li-box">
          <img className="main-page-each-li-img" src={crypto && crypto.image} alt={crypto && crypto.image} />
          <div className="main-page-crypto-info">
            <h2 className="main-page-each-li-detail">
              <span className="detail-feature-tag">Name:</span>
              &nbsp;
              {crypto && crypto.name}
            </h2>
            <h2 className="main-page-each-li-detail">
              <span className="detail-feature-tag">Symbol:</span>
              &nbsp;
              {crypto && crypto.symbol.toUpperCase()}
            </h2>
            <h2 className="main-page-each-li-detail">
              <span className="detail-feature-tag">Price:</span>
              &nbsp;
              {crypto && crypto.currentPrice}
              &nbsp;
              <span className="USD" style={{ color: currentCurrency === 'USD' ? '#0aa756' : '#9fd9b6' }}>{currentCurrency === 'USD' ? '$' : '€'}</span>
              &nbsp;
              <span
                className="main-page-price-change"
                style={{
                  color: crypto && Number(crypto.priceChangePercentage24h).toFixed(2) < 0 ? '#DC143C' : '#00ff7f',
                }}
              >
                (
                {crypto && Number(crypto.priceChangePercentage24h).toFixed(2)}
                %)
              </span>
            </h2>
            <h2 className="main-page-each-li-detail">
              <span className="detail-feature-tag">MCapRank:</span>
              &nbsp;
              {crypto && crypto.marketCapRank}
            </h2>
          </div>
          <div className="arrow-circle" />
          <div className="comments-icon" />
        </div>
      </li>
    </Link>
  );
}

Crypto.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    currentPrice: PropTypes.number.isRequired,
    priceChangePercentage24h: PropTypes.number.isRequired,
    marketCapRank: PropTypes.number.isRequired,
  }).isRequired,
  currentCurrency: PropTypes.string.isRequired,
};
