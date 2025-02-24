import React from "react";
import styles from "./Home.module.css";
import { Post } from "../components/Post";
import { SearchBar } from "../components/SearchBar";

export const Home = ({ search, setSearch, data }) => {
  return (
    <div>
      <SearchBar />
      <div className={styles.home_main}>
        <Post data={data} search={search} />
      </div>
    </div>
  );
};
