import React from "react";
import { cards } from "../../data/cards";
import CreditCard from "./CreditCard";

const CreditCardList = () => {
  return (
    <div className="cc__list">
      <section className="cc-wrapper">
        {cards.map(cc => (
          <CreditCard key={cc.id} cards={cc} />
        ))}
      </section>
    </div>
  );
};

export default CreditCardList;
