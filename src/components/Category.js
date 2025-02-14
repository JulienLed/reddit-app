import styles from "./Category.module.css";
import React from "react";
import { categories } from "../MockData";

export const Category = ({ setCategory }) => {
  return (
    <ul className={styles.category}>
      {categories.map((el) => {
        return (
          <li
            style={{ listStyleType: "none" }}
            onClick={(e) => setCategory(e.target.value)}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};
