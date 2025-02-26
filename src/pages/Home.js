import React from "react";
import styles from "./Home.module.css";
import { Post } from "../components/Post";
import { SearchBar } from "../components/SearchBar";
import { SubReddit } from "../components/SubReddit";

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <div className={styles.home_main}>
        <SubReddit />
        <Post />
      </div>
    </div>
  );
};
