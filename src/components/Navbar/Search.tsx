import React from "react";

const Search = () => {
  return (
    <div className="center__search">
      <i className="fas fa-filter"></i>
      <input type="text" name="search" placeholder="Search for something" />
      <button type="submit">
        <i className="fas fa-search"></i>
        <span>Search</span>
      </button>
    </div>
  );
};

export default Search;
