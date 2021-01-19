import React, { FormEvent } from "react";

const Search = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="center__search">
        <i className="fas fa-filter"></i>
        <input type="text" name="search" placeholder="Search for something" />
        <button type="submit">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
