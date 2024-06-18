import './Card.css';
import emvChip from '/emv-chip.svg';
import logo from '/logo-mastercard.svg';

export const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header--right">
          <div>
            <img className="logo" src={logo} />
            <p className="mastercard">mastercard</p>
          </div>
        </div>
        <p className="card__header--left">
          <img className="chip" src={emvChip} />
        </p>
      </div>
      <p className="card__context">
        <span>0000</span>
        <span>0000</span>
        <span>0000</span>
        <span>0000</span>
      </p>
      <div className="card__footer">
        <div className="card__left">
          <p className="card__footer--title">Card holder</p>
          <p className="card__row username">name...</p>
        </div>
        <div className="card__right">
          <p className="card__footer--title">Valid thru</p>
          <p className="card__row">12/24</p>
        </div>
      </div>
    </div>
  );
};
