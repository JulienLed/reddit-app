import styles from "./Post.module.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Post = ({ data }) => {
  const [postEl, setPostEl] = useState([]);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    const postsArr = Object.values(data);
    setPostEl(postsArr);
  }, [data]);

  let filteredPosts = postEl.filter((el) => {
    const matchSearch = search
      ? el.title.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchSearch;
  });

  return (
    <div className={styles.posts}>
      {filteredPosts.length === 0 ? (
        <p className={styles.post}>Nothing Found</p>
      ) : (
        filteredPosts.map((el) => {
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
        })
      )}
    </div>
  );
};
