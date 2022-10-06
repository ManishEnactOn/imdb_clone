import React from "react";

const Menu = () => {
  return (
    <div className={`absolute z-[99] bg-primary min-h-screen w-full text-white ${toggle ? "block" : "hidden"}`}>
      <div className="signIn-container">
        <div className="flex-between py-8">
          <div className="imdb-logo cursor-pointer rounded overflow-hidden">
            <img src="/images/imdb-logo.svg" className="w-28 h-12" alt="imdb-logo" />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <button className="close h-10 w-10 rounded-full bg-yellow-150"></button>
            <XMarkIcon className="absolute top-[20%] left-[20%] text-black h-6 " />
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-2">
          <div>
            <MenuCategory icon={<MovieIcon className="text-yellow-150" />} title="Movies" />
            <div className=" flex flex-col space-y-3 pl-9 pt-4">
              <SubCategory title="Release Calender" />
              <SubCategory title="Top 250 Movies" />
              <SubCategory title="Most Popular Movies" />
              <SubCategory title="Top Box Office" />
            </div>
          </div>
          <div>
            <MenuCategory icon={<TvIcon className="text-yellow-150 h-6" />} title="Tv Shows" />
            <div className=" flex flex-col space-y-3 pl-9 pt-4">
              <SubCategory title="What's on TV & Streaming" />
              <SubCategory title="Top 250 TV Shows" />
              <SubCategory title="Most Popular TV Shows" />
              <SubCategory title="India TV Spotlight" />
            </div>
          </div>
          <div>
            <MenuCategory icon={<StarIcon className="text-yellow-150 h-6" />} title="Awards & Events" />
            <div className=" flex flex-col space-y-3 pl-9 pt-4">
              <SubCategory title="Oscars" />
              <SubCategory title="Best Picture Winners" />
              <SubCategory title="New York Comic-Con" />
              <SubCategory title="Festival Central" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
