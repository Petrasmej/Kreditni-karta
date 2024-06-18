import React, { useState, useRef } from 'react';
import './CreditCardInput.css';

const CreditCardInput: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [cardHolder, setCardHolder] = useState<string>('');
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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolder(event.target.value);
  };

  const handleClick = () => {
    setCardNumber(['', '', '', '']);
    setCardHolder('');
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="form">
      <p>Card Number</p>
      <div className="cardNumber">
        {cardNumber.map((num, index) => (
          <input
            className="inputNumber"
            key={index}
            type="text"
            value={num}
            onChange={(e) => handleChange(index, e.target.value)}
            maxLength={4}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <p>Card Holder</p>
      <div className="cardHolder">
        <input
          className="inputName"
          value={cardHolder}
          onChange={handleNameChange}
        />
      </div>
      <button className="button" onClick={handleClick}>
        Clear
      </button>
    </div>
  );
};

export default CreditCardInput;
