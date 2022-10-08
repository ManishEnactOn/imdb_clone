import React, { useEffect } from "react";
import { auth } from "../firebase/firebase";
import CategoryTitle from "../components/CategoryTitle";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpNextMovies from "../components/UpNextMovies";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
  useEffect(() => {
    console.log("effect called");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <HomeLayout>
      <div className="bg-primary min-h-screen">
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
    </HomeLayout>
  );
};

export default Home;
