import React, { useState } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      className="test-container"
      style={{
        display: visible ? 'flex' : 'none',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        right: '1rem',
        bottom: '3.5rem',
        height: '4rem',
        zIndex: '10',
        backgroundColor: 'black',
      }}
    >
      <button
        data-testid="scroll"
        className="btn-scroll"
        style={{
          outline: 'none',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
      >
        <i
          style={{ fontSize: '2.5rem', color: 'white' }}
          className="fa fa-arrow-circle-up"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
