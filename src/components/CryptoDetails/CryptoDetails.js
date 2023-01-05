/* eslint-disable react/prop-types */
import React from 'react';
import '../../index.css';

export default function CryptoDetails(props) {
  const { crypto } = props;
  const {
    name, image, currentPrice, symbol, marketCap, marketCapRank, totalVolume,
    high24h, low24h, priceChange24h, marketCapChange24h,
    circulatingSupply, totalSupply, maxSupply,
  } = crypto;

  return (
    <div className="detail-page-all">
      <div className="detail-page-main">
        <img className="detail-page-crypto-logo" src={image} alt={image} />
        <div className="detail-page-general-info">
          <h2 className="main-page-each-li-detail">
            <span className="detail-feature-tag">Name:</span>
              &nbsp;
            {name}
          </h2>
          <h2 className="main-page-each-li-detail">
            <span className="detail-feature-tag">Symbol:</span>
              &nbsp;
            {symbol}
          </h2>
          <h2 className="main-page-each-li-detail">
            <span className="detail-feature-tag">Price:</span>
              &nbsp;
            {currentPrice}
          </h2>
        </div>
      </div>
      <ul className="detail-ul">
        <li className="detail-each-li">
          <span className="detail-feature-tag">Market Cap:</span>
          <span>{marketCap}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Market Cap Rank:</span>
          <span>{marketCapRank}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Total Volume:</span>
          <span>{totalVolume}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Highest 24h:</span>
          <span>{high24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Lowest 24h</span>
          <span>{low24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Price Change 24h:</span>
          <span>{priceChange24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Market Cap Change Percentage 24h:</span>
          <span>{marketCapChange24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Circulating Supply:</span>
          <span>{circulatingSupply}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Total Supply:</span>
          <span>{totalSupply}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Max Supply:</span>
          <span>{maxSupply}</span>
        </li>
      </ul>
    </div>
  );
}
