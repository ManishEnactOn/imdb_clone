import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const NextMovieSkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#121212" highlightColor="#333333">
      <div>
        <div className="grid grid-cols-8 gap-3 cursor-pointer">
          <div className="col-span-2 h-32">
            <Skeleton count={1} className="h-full" />
          </div>
          <div className="col-span-6">
            <div>
              <Skeleton count={1} />
            </div>
            <Skeleton count={1} />
            <Skeleton count={1} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default NextMovieSkeletonLoader;
