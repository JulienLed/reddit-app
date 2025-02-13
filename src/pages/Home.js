import React from "react";
import { Post } from "../components/Post";
import { SearchBar } from "../components/SearchBar";

export const Home = ({ search, setSearch, data }) => {
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <Post data={data} />
    </>
  );
};
