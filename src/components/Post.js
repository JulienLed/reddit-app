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
          <div key={el.id}>
            <img alt={el.title} src={el.image}></img>
            <h1>{el.title}</h1>
            <p>{el.text}</p>
          </div>
        );
      })}
    </>
  );
};
