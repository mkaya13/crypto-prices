import React from 'react';

export const Footer = () => (
  <div
    style={{
      display: 'flex',
      background: 'purple',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
      borderTop: '1px solid #fff',
      gap: '1rem',
    }}
  >
    <div
      style={{
        margin: '1rem 0 1rem 0',
      }}
    >

      Created by
      {' '}
      <em>Mert Kaya</em>
    </div>
    <div>
      &copy; Copyright 2023 -
      {' '}
      {new Date().getFullYear()}
    </div>
  </div>
);

export default { Footer };
