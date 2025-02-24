import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/SearchSlice";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <input
      className={styles.bar}
      value={input}
      placeholder="Search..."
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispatch(setSearch(input));
          setInput("");
        }
      }}
    ></input>
  );
};
