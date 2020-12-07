import axios from "axios";
import LRU from "lru-cache";

const cache = LRU({
  max: 1000,
  maxAge: 1000 * 10
});

const get = async url => {
  let data = cache.get(url);
  if (data) {
    return JSON.parse(data);
  }
  const res = await axios.get(url);
  data = res.data;
  cache.set(url, JSON.stringify(data));
  return data;
};

export { get };
