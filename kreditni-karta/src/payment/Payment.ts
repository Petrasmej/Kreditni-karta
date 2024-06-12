import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [cardInputVisible, setCardInputVisible] = useState<boolean>(false);

  const handlePay = () => setCardInputVisible(true);

  return (
    <div className="payment">
      <button onClick={handlePay}>Zaplatit</button>
      {cardInputVisible ? <input type="text" /> : null}
    </div>
  );
};

export default Payment;

