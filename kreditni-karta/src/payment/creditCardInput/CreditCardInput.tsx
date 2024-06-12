import React, { useState, useRef } from 'react';

const CreditCardInput: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  //funkce pro zachyceni zmen vstupnich poli
  const handleChange = (index: number, value: string) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = value;
    setCardNumber(newCardNumber);

    // presune focus na dalsi 4 cislice
    if (value.length === 4 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div>
      {cardNumber.map((num, index) => (
        <input
          key={index}
          type="text"
          value={num}
          onChange={(e) => handleChange(index, e.target.value)}
          maxLength={4}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default CreditCardInput;
