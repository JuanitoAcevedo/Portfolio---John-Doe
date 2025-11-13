import React from 'react';

const BlueDivider = ({
  centered = false,
  width = '100%',
  height = '6px',
  margin = '2rem 0'
}) => {
  const verticalMargin = margin.split(' ')[0]; // ex: '2rem'
  const style = {
    display: 'block',
    width: centered ? width : '100%',
    height,
    backgroundColor: '#003d99',
    margin: centered ? `${verticalMargin} auto` : margin,
    borderRadius: '3px'
  };

  return <div style={style}></div>;
};

export default BlueDivider;