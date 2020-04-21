import React from "react";
import "./CreditCard.scss";

const CreditCard = ({ cards }) => {
  const { company, balance, name, number, expDate } = cards;
  function getLogo(company) {
    if (company === "Visa") {
      return "https://res.cloudinary.com/dkwgkbgqq/image/upload/v1587423931/visa.svg";
    } else if (company === "MasterCard") {
      return "https://res.cloudinary.com/dkwgkbgqq/image/upload/v1587423931/mastercard.svg";
    }
  }
  return (
    <section className="cc-wrapper">
      <div className={`cc cc--${company.toLowerCase()} `}>
        <header className="cc__header">
          <div className="cc__balance">
            <div className="cc__balance-label">Balance</div>
            <div className="cc__balance-amount">$ {balance}</div>
          </div>
          <div className="cc__logo">
            <img src={getLogo(company)} alt={company} />
          </div>
        </header>
        <footer className="cc__footer">
          <div className="cc__name">{name}</div>
          <div className="cc__bottom">
            <div className="cc__number">{number}</div>
            <div className="cc__exp-date">{expDate}</div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CreditCard;
