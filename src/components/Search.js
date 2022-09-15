import React from "react";
import { ReactComponent as SearchIcon } from "../assets/svg/SearchIcon.svg";

function Search() {
  return (
    <div className="relative ">
      <span className="w-4 mt-0 absolute top-1/2 -translate-y-1/2 left-3 ">
        <SearchIcon/>
      </span>
      <input type="text" className="w-full  rounded-md h-6   pl-10 dark:bg-[#1C1C1E] dark:border-none" />
    </div>
  );
}

export default Search;
