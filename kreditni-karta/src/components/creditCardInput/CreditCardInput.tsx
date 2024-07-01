import React from 'react';
import { useSettings } from '../../settings-hooks';
import './CreditCardInput.css';

const CreditCardInput: React.FC = () => {
  const {
    first,
    handleChangeFirst,
    second,
    handleChangeSecond,
    third,
    handleChangeThird,
    fourth,
    handleChangeFourth,
    cardHolder,
    handleChangeCardHolder,
    cardValid,
    handleChangeCardValid,
  } = useSettings();

  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  const handleInputChange =
    (
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
      index: number,
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(event);
      if (
        event.target.value.length === 4 &&
        index < inputRefs.current.length - 1
      ) {
        inputRefs.current[index + 1]?.focus();
      }
    };

  const handleClick = () => {
    handleChangeFirst({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
    handleChangeSecond({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
    handleChangeThird({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
    handleChangeFourth({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
    handleChangeCardHolder({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
    handleChangeCardValid({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="form">
      <p className="card__description">Card Number</p>
      <div className="cardNumber">
        <input
          className="inputNumber"
          type="text"
          value={first}
          onChange={handleInputChange(handleChangeFirst, 0)}
          maxLength={4}
          ref={(el) => (inputRefs.current[0] = el)}
        />
        <input
          className="inputNumber"
          type="text"
          value={second}
          onChange={handleInputChange(handleChangeSecond, 1)}
          maxLength={4}
          ref={(el) => (inputRefs.current[1] = el)}
        />
        <input
          className="inputNumber"
          type="text"
          value={third}
          onChange={handleInputChange(handleChangeThird, 2)}
          maxLength={4}
          ref={(el) => (inputRefs.current[2] = el)}
        />
        <input
          className="inputNumber"
          type="text"
          value={fourth}
          onChange={handleInputChange(handleChangeFourth, 3)}
          maxLength={4}
          ref={(el) => (inputRefs.current[3] = el)}
        />
      </div>
      <div className="cardInfo">
        <div className="cardHolder">
          <p className="card__description">Card Holder</p>
          <input
            className="inputName"
            value={cardHolder}
            onChange={handleChangeCardHolder}
          />
        </div>
        <div className="cardValid">
          <p className="card__description">Valid Thru Date</p>
          <input
            className="inputValid"
            value={cardValid}
            onChange={handleChangeCardValid}
            maxLength={5}
          />
        </div>
      </div>
      <button className="button" onClick={handleClick}>
        Clear
      </button>
    </div>
  );
};

export default CreditCardInput;
