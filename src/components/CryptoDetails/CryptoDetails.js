/* eslint-disable react/prop-types */
import React from 'react';
import '../../index.css';

export default function CryptoDetails(props) {
  const { crypto } = props;

  return (
    <div className="detail-page-all">
      <div className="detail-page-main">
        <img className="detail-page-crypto-logo" src={crypto && crypto.image} alt={crypto && crypto.image} />
        <div className="detail-page-general-info">
          <h2 className="main-page-each-li-detail">
            <span className="detail-feature-tag">Name:</span>
              &nbsp;
            {crypto && crypto.name}
          </h2>
          <h2 className="main-page-each-li-detail">
            <span className="detail-feature-tag">Symbol:</span>
              &nbsp;
            {crypto && crypto.symbol}
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
      <ul className="detail-ul">
        <li className="detail-each-li">
          <span className="detail-feature-tag">Market Cap:</span>
          <span className="each-detail-info">{crypto && crypto.marketCap}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Market Cap Rank:</span>
          <span className="each-detail-info">{crypto && crypto.marketCapRank}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Total Volume:</span>
          <span className="each-detail-info">{crypto && crypto.totalVolume}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Highest 24h:</span>
          <span className="each-detail-info">{crypto && crypto.high24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Lowest 24h</span>
          <span className="each-detail-info">{crypto && crypto.low24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Price Change 24h:</span>
          <span>{crypto && crypto.priceChange24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Market Cap Change</span>
          <span className="each-detail-info">{crypto && crypto.marketCapChange24h}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Market Cap Change Percentage 24h:</span>
          <span className="each-detail-info">
            {crypto && crypto.marketCapChangePercentage24h}
            {' '}
            %
          </span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Circulating Supply:</span>
          <span className="each-detail-info">{crypto && crypto.circulatingSupply}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Total Supply:</span>
          <span className="each-detail-info">{crypto && crypto.totalSupply}</span>
        </li>
        <li className="detail-each-li">
          <span className="detail-feature-tag">Max Supply:</span>
          <span className="each-detail-info">{crypto && crypto.maxSupply}</span>
        </li>
      </ul>
    </div>
  );
}
