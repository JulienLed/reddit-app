export const fetchData = () => {
  return fetch("https://www.reddit.com/r/popular.json")
    .then((res) => res.json())
    .then((resjson) => {
      const newData = {};
      const subRedditArr = [];
      const nextData = resjson.after;
      for (let el of resjson.data.children) {
        newData[el.data.id] = {
          id: el.data.id,
          title: el.data.title,
          image: (() => {
            let imgUrl = el.data?.preview?.images?.[0]?.source?.url;
            return imgUrl ? imgUrl.replace(/&amp;/g, "&") : null;
          })(),
          url: el.data.url,
          author: el.data.author,
          subReddit: (() => {
            if (!subRedditArr.includes(el.data.subreddit)) {
              subRedditArr.push(el.data.subreddit);
            }
            return el.data.subreddit;
          })(),
        };
      }
      return { newData, subRedditArr, nextData };
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      return {};
    });
};
