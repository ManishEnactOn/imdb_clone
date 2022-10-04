import React, { useState, useEffect } from "react";
import CategoryTitle from "../components/CategoryTitle";
import Movie from "../components/Movie";
import Multiselect from "multiselect-react-dropdown";
import MovieSkeletonLoader from "../components/MovieSkeletonLoader";
const upComingMovieApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
var filterMovieData;
const Upcoming = () => {
  const state = {
    options: [
      { name: "Animation", id: 16 },
      { name: "Science Fiction", id: 878 },
      { name: "Action", id: 28 },
      { name: "Thriller", id: 53 },
      { name: "Adventure", id: 12 },
      { name: "Fantasy", id: 14 },
      { name: "Drama", id: 18 },
      { name: "Mystery", id: 9648 },
      { name: "Comedy", id: 35 },
      { name: "Family", id: 10751 },
      { name: "Crime", id: 80 },
    ],
  };

  const [upComingMovie, setupComingMovie] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    fetch(upComingMovieApi)
      .then((res) => res.json())
      .then((upcoming) =>
        setTimeout(() => {
          setupComingMovie(upcoming.results);
          setMovieData(upcoming.results);
          SetLoading(false);
        }, 1500)
      );
  }, []);

  const onSelect = (selectedList) => {
    console.log("onselect:", selectedList);
    filterMovieData = movieData.filter(({ genre_ids: id1 }) => selectedList.some(({ id: id2 }) => id1.includes(id2)));
    setupComingMovie(filterMovieData);
  };
  const onRemove = (selectedList) => {
    filterMovieData = movieData.filter(({ genre_ids: id1 }) => selectedList.some(({ id: id2 }) => id1.includes(id2)));
    if (selectedList.length > 0) {
      setupComingMovie(filterMovieData);
    } else {
      setupComingMovie(movieData);
    }
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="content-container">
        <section>
          <CategoryTitle title="Watch New Movie & TV Trailers" />
          <div className="multiselect flex justify-end w-full -mt-10">
            <Multiselect
              options={state.options} // Options to display in the dropdown
              selectedValues={state.selectedValue} // Preselected value to persist in dropdown
              onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
            />
          </div>
          {loading ? (
            <>
              {/* <div className="flex-center w-full">
                <h1 className="text-white text-32"> Loading...</h1>
              </div> */}

              <div className="grid grid-cols-5 gap-4 py-2">
                {Array.from(Array(10).keys()).map((number) => (
                  <MovieSkeletonLoader />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-5 gap-4 py-2">
                {upComingMovie.map((data) => (
                  <Movie data={data} key={data.id} />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Upcoming;
