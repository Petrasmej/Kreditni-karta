import React, { useState, useEffect, useRef } from 'react';
import CreditCardInput from './creditCardInput/CreditCardInput';

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
      <button onClick={handlePay}>Zaplatit</button>
      {cardInputVisible ? (
        <div ref={cardInputRef}>
          <CreditCardInput />
        </div>
      ) : null}
    </div>
  );
};

export default Payment;
