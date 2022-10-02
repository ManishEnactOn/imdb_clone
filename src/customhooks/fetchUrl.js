import React from "react";
import { useState, useEffect } from "react";
const useFetchUrl = (url1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [singleMovieData, setSingleMovieData] = useState([]);

  // const getData = (url) => {
  //   setLoading(true);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTimeout(() => {
  //         setData(data);
  //         setLoading(false);
  //         // null
  //         //   console.log(data);
  //       }, 1000);
  //     })
  //     .catch((e) => {
  //       console.log({ e });
  //       setLoading(false);
  //     });
  // };

  useEffect(() => {
    setLoading(true);
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data.results);
          setLoading(false);
          // null
        }, 100);
      })
      .catch((e) => {
        console.log({ e });
        setLoading(false);
      });
  }, [url1]);

  return { data, loading };
};

export default useFetchUrl;
