import React from 'react';

export default function Highcolor({children, color='#fff',textColor='#205d3b'}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: textColor,
        padding: '0.2em',
        boxSizing:'border-box',
        margin: '0.4em'
      }}>
      {children}
    </span>
  );
}