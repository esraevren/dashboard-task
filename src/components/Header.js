import React from "react";
import Search from "./Search";


function Header() {
  return (
    <div className="border-l border-l-1 border-l-zinc-300 dark:border-black">
      <header className="pl-8 flex items-center gap-x-10  border-b border-b-1 border-l-zinc-300 dark:border-black">
        <div className="font-semibold text-xs dark:text-white">
          Dashboard
        </div>

        <div className="flex items-center justify-center text-xs   p-4 text-gray-300 font-bold">
          Advanced Quary
        </div>

        <div className="flex items-center justify-center text-xs p-4 text-gray-300 font-bold">
          Events
        </div>
        <Search />
      </header>
      

      


    </div>
  );
}

export default Header;
