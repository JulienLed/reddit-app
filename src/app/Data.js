export const data = {};

fetch("https://www.reddit.com/r/all.json")
  .then((res) => res.json())
  .then((resjson) => {
    for (el of resjson.data.children) {
      data[el.data.id] = {};
    }
  })
  .catch((err) => console.log(`Error: ${err}`));
