import React from "react";
import { cards } from "../../data/cards";
import CreditCard from "./CreditCard";

const CreditCardList = () => {
  return (
    <section className="cc-wrapper">
      <div className="cc__list">
        {cards.map(cc => (
          <CreditCard key={cc.id} cards={cc} />
        ))}
      </div>
    </section>
  );
};

export default CreditCardList;
