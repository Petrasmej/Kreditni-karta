import React, { useState, useEffect, useRef } from 'react';
import CreditCardInput from '../creditCardInput/CreditCardInput';
import './Payment.css';

export const Payment: React.FC = () => {
  const [cardInputVisible, setCardInputVisible] = useState<boolean>(false);
  const cardInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      cardInputVisible &&
      cardInputRef.current &&
      document.activeElement !== cardInputRef.current
    ) {
      const firstInput = cardInputRef.current.querySelector('input');
      firstInput?.focus();
    }
  }, [cardInputVisible]);

  const handlePay = () => setCardInputVisible(true);

  return (
    <div className="payment">
      {!cardInputVisible ? (
        <button className="button" onClick={handlePay}>
          Insert details
        </button>
      ) : (
        <div ref={cardInputRef}>
          <CreditCardInput />
        </div>
      )}
    </div>
  );
};

export default Payment;
