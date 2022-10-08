import { useState, useEffect } from "react";
import { url, API_KEY } from "../config";
const useFetchUrl = (category) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`${url}${category}?api_key=${API_KEY}&&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data.results);
          setLoading(false);
          // null
        }, 1500);
      })
      .catch((e) => {
        // console.log({ e });
        setLoading(false);
      });
  }, []);

  return { data, loading };
};

export default useFetchUrl;
