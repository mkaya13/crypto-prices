import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Crypto(props) {
  const { crypto } = props;

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
              <span className="USD">$</span>
            </h2>
          </div>
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
  }).isRequired,
};
