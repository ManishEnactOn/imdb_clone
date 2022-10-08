import React from "react";
import { useState, useEffect } from "react";
const useFetchUrl = (url1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // var url = url1;
  useEffect(() => {
    setLoading(true);
    fetch(url1)
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
