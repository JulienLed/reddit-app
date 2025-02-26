import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../app/Data";
import { setSubReddit } from "../features/SubReddit";

export const SubReddit = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      let data = await fetchData();
      setData(data);
    };
    getData();
  }, []);

  return (
    <div>
      {/*remplacer data;map() par le tableau des subreddit depuis fetchData*/}
      {data.map((el) => {
        return (
          <ul>
            <li onClick={dispatch(setSubReddit(el.target.value))}>
              <span>{el}</span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
