import React, { useState, useRef } from 'react';

const CreditCardInput: React.FC = () => {
  const [values, setValues] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 4) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Move focus to the next input if 4 digits are entered
      if (value.length === 4 && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Backspace' && values[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={4}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{ width: '50px', textAlign: 'center' }}
        />
      ))}
    </div>
  );
};

export default CreditCardInput;
