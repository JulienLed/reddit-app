import React from "react";
import { Post } from "../components/Post";
import { SearchBar } from "../components/SearchBar";
import { Category } from "../components/Category";

export const Home = ({ search, setSearch, data, setCategory }) => {
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <Category setCategory={setCategory} />
      <Post data={data} />
    </>
  );
};
