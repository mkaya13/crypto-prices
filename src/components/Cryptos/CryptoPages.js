/* eslint-disable react/prop-types */
import React from 'react';
import '../../index.css';

export const CryptoPages = (props) => {
  const {
    paginate, currentPage,
  } = props;
  const pageNumbers = [];

  let nowPage = 0;
  let limitedPage = 0;

  if (currentPage === '3' || currentPage === 3) {
    nowPage = currentPage && Number(currentPage) - 1;
    limitedPage = currentPage && Number(currentPage) + 2;
  } else if (currentPage === '2' || currentPage === 2) {
    nowPage = currentPage && Number(currentPage);
    limitedPage = currentPage && Number(currentPage) + 3;
  } else if (currentPage < 3) {
    nowPage = currentPage && Number(currentPage) + 1;
    limitedPage = currentPage && Number(currentPage) + 5;
  } else if (currentPage >= 125) {
    nowPage = currentPage && Number(currentPage) - 2;
    limitedPage = currentPage && Number(126);
  } else {
    nowPage = currentPage && Number(currentPage) - 2;
    limitedPage = currentPage && Number(currentPage) + 2;
  }
  for (let i = nowPage; i <= limitedPage; i += 1) {
    pageNumbers.push(i.toString());
  }

  return (
    <ul className="more-pages-ul">
      <li key="1" id="1" className="more-pages-li">
        <button
          id="1"
          type="button"
          onClick={() => {
            paginate('1');
          }}
          className={currentPage === '1' ? 'active' : ''}
        >
          1
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} className="more-pages-li">
          <button
            id={number}
            type="button"
            onClick={() => {
              paginate(number);
            }}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        </li>
      ))}
      <li className="more-pages-li">...</li>
      <li key="127" id="127" className="more-pages-li">
        <button
          id="127"
          type="button"
          onClick={() => {
            paginate('127');
          }}
          className={currentPage === '127' ? 'active' : ''}
        >
          127
        </button>
      </li>
    </ul>
  );
};

export default CryptoPages;
