import styles from "./Post.module.css";
import React, { useState, useEffect } from "react";

export const Post = ({ data }) => {
  const [postEl, setPostEl] = useState([]);

  useEffect(() => {
    const postsArr = Object.values(data);
    setPostEl(postsArr);
  }, [data]);

  return (
    <>
      {postEl.map((el) => {
        return (
          <div className={styles.article} key={el.id}>
            <img alt={el.title} src={el.image}></img>{" "}
            {/* Rajouter une classe pour l'image */}
            <h1>{el.title}</h1>
            <p>{el.text}</p>
          </div>
        );
      })}
    </>
  );
};
