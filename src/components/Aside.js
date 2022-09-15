import React from "react";
import myImage from "../assets/images/image3.png";
import Charts from "./Charts";
import List from "./List";
import Toggle from "./Toggle";
import { ReactComponent as ProfileIcon } from "../assets/svg/ProfileIcon.svg";
import { ReactComponent as LinkIcon } from "../assets/svg/LinkIcon.svg";
import SubTitle from "./SubTitle";

function Aside() {
  return (
    <>
      <div className="flex items-center   gap-x-8  border-b border-b-1 pr-7  ">
        <h1 className="font-semibold text-xs dark:text-white">Bessie Cooper</h1>
        <img
          src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="user"
          className="h-12 w-12   rounded-xl"
        ></img>
        <ProfileIcon />
        <Toggle />
      </div>

      <div className="dark:bg-black ">
        <div className="ml-10 pt-6 mb-4">
          <SubTitle>Superiority</SubTitle>
        </div>

        <img
          className="rounded-3xl shadow-xl w-[200px] ml-10 "
          src={myImage}
          alt=""
        />

        <div className="flex ml-10 mt-2 mb-4">
          <LinkIcon />
          <h6 className="text-xs text-violet-800 ">Social Trading Platform</h6>
        </div>

        <div className="p-2 w-[200px] ml-10 bg-white rounded-2xl shadow-xl dark:bg-zinc-800">
          <List />
        </div>
        <div className="ml-10 mb-4 mt-[35px]">
          <SubTitle>My Income</SubTitle>
          <Charts />
        </div >
        
      </div>
    </>
  );
}

export default Aside;
