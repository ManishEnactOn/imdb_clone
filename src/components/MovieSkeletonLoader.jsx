import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieSkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#121212" highlightColor="#333333">
      <div>
        <div className="moviePoster h-[274px]">
          <Skeleton count={1} className="h-full" />
        </div>
        <div className="movieInfo px-2 py-2 text-white rounded-b-md">
          <div>
            <Skeleton count={1} width={40} />
          </div>

          <Skeleton count={1} width={60} />

          <div>
            <Skeleton count={1} width={90} />
          </div>

          <div>
            <Skeleton count={1} width={100} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default MovieSkeletonLoader;
