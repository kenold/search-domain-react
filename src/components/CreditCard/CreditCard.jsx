import React from "react";
import "./CreditCard.scss";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

const CreditCard = () => {
  return (
    <section className="cc-wrapper">
      <div className="cc">
        <header className="cc__header">
          <div className="cc__balance">
            <div className="cc__balance-label">Balance</div>
            <div className="cc__balance-amount">$ 9481.50</div>
          </div>
          <div className="cc__logo">
            <img
              src="https://res.cloudinary.com/dkwgkbgqq/image/upload/v1587423931/mastercard.svg"
              alt=""
            />
          </div>
        </header>
        <footer className="cc__footer">
          <div className="cc__name">DStudio</div>
          <div className="cc__bottom">
            <div className="cc__number">3392272772</div>
            <div className="cc__exp-date">02/22</div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CreditCard;
