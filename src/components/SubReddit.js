import React, { useState, useEffect } from "react";
import { fetchData } from "../app/Data";
import styles from "./SubReddit.module.css";
import { useDispatch } from "react-redux";
import { setSubReddit } from "../features/SubRedditSlice";

export const SubReddit = () => {
  const dispatch = useDispatch();
  const [subReddits, setSubReddits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchData();
      setSubReddits([...data.subRedditArr].sort());
    };
    getData();
  }, []);

  return (
    <div>
      {subReddits.map((el) => {
        return (
          <ul key={el}>
            <li
              className={styles.subReddit}
              onClick={() => {
                dispatch(setSubReddit(el));
              }}
            >
              <span>{el}</span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
