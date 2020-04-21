import React from "react";
import "./CreditCard.scss";
import { cards } from "../../data/cards";

const CreditCard = () => {
  function getLogo(company) {
    if (company === "Visa") {
      return "https://res.cloudinary.com/dkwgkbgqq/image/upload/v1587423931/visa.svg";
    } else if (company === "MasterCard") {
      return "https://res.cloudinary.com/dkwgkbgqq/image/upload/v1587423931/mastercard.svg";
    }
  }
  return (
    <section className="cc-wrapper">
      {cards.map(cc => (
        <div className={`cc cc--${cc.company.toLowerCase()}`} key={cc.name}>
          <header className="cc__header">
            <div className="cc__balance">
              <div className="cc__balance-label">Balance</div>
              <div className="cc__balance-amount">$ {cc.balance}</div>
            </div>
            <div className="cc__logo">
              <img src={getLogo(cc.company)} alt={cc.company} />
            </div>
          </header>
          <footer className="cc__footer">
            <div className="cc__name">{cc.name}</div>
            <div className="cc__bottom">
              <div className="cc__number">{cc.number}</div>
              <div className="cc__exp-date">{cc.expDate}</div>
            </div>
          </footer>
        </div>
      ))}
    </section>
  );
};

export default CreditCard;
