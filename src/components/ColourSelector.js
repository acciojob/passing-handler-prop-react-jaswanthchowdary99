import React from 'react';

const ColourSelector = (props) => {
  const { config, handleColorSelection } = props;
  const { background, classname, label } = config;

  return (
    <button
      className={classname}
      onClick={() => handleColorSelection(background)} 
    >
      {label}
    </button>
  );
}

export default ColourSelector;
