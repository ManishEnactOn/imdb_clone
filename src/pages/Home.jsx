import React, { useContext, useEffect } from "react";
import CategoryTitle from "../components/CategoryTitle";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpNextMovies from "../components/UpNextMovies";
import { AppContext } from "../context/context";

const Home = () => {
  return (
    <div className="bg-primary">
      <section>
        <UpNextMovies />
      </section>
      <section>
        <CategoryTitle title="Popular Movies" />
        <PopularMovies />
      </section>
      <section>
        <CategoryTitle title="TopRated Movies" />
        <TopRatedMovies />
      </section>
    </div>
  );
};

export default Home;