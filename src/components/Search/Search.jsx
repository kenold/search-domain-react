import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <section className="search-wrapper">
      <div className="search-box">
        <form action="" className="form">
          <input
            type="text"
            name="query"
            placeholder="Search for your new domain"
          />
          <button className="form__btn">Get it</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
