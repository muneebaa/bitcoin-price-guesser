import React from 'react';

function Button({ handleClick, disabled, value, background }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{ background: background }}>
      {value}
    </button>
  );
}

export default Button;
