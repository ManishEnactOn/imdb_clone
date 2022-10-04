import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieSkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#ffffff" highlightColor="#e6ffff">
      <div>
        <div className="moviePoster h-[274px]">
          <Skeleton count={1} className="h-full" />
        </div>
        <div className="movieInfo px-2 py-2 text-white rounded-b-md">
          <div>
            <Skeleton count={1} width={90} />
          </div>

          <Skeleton count={1} width={130} />

          <div>
            <Skeleton count={1} width={160} />
          </div>

          <div>
            <Skeleton count={1} width={200} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default MovieSkeletonLoader;
