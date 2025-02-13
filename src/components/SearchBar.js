import React from "react";

export const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      value={search}
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
};
