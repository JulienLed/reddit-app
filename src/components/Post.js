import styles from "./Post.module.css";
import React, { useState, useEffect } from "react";

export const Post = ({ data }) => {
  const [postEl, setPostEl] = useState([]);

  useEffect(() => {
    const postsArr = Object.values(data);
    setPostEl(postsArr);
  }, [data]);

  return (
    <div className={styles.posts}>
      {postEl.map((el) => {
        return (
          <div className={styles.post} key={el.id}>
            <h1>{el.title}</h1>
            <img
              className={styles.postImg}
              alt={el.title}
              src={el.image}
            ></img>{" "}
            <p>{el.text}</p>
          </div>
        );
      })}
    </div>
  );
};
