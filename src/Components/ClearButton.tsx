import React, { useState } from 'react';

const ClearButton: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
