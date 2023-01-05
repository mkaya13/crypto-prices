/* eslint-disable react/prop-types */
import React from 'react';

export default function Crypto(props) {
  const { crypto } = props;
  const {
    id, symbol, name, image, currentPrice,
  } = crypto;

  return (
    <a className="main-page-each-crypto" href={`detail/${id}`}>
      <li>
        <div className="main-page-each-li-box">
          <img className="main-page-each-li-img" src={image} alt={image} />
          <div className="main-page-crypto-info">
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
      </li>
    </a>
  );
}
