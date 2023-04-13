import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b  b--green bg-lightest-blue"
        placeholder="searcher"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
