import React from "react";
import { ReactComponent as HamburgerIcon } from "../assets/svg/HamburgerIcon.svg";
import { ReactComponent as BinanceIcon } from "../assets/svg/BinanceIcon.svg";
import { ReactComponent as BlueIcon } from "../assets/svg/BlueIcon.svg";
import { ReactComponent as AirbnbIcon } from "../assets/svg/AirbnbIcon.svg";
import { ReactComponent as CommandIcon } from "../assets/svg/CommandIcon.svg";
import { ReactComponent as PieIcon } from "../assets/svg/PieIcon.svg";
import { ReactComponent as TimeIcon } from "../assets/svg/TimeIcon.svg";
import { ReactComponent as LightIcon } from "../assets/svg/LightIcon.svg";
import { ReactComponent as WorldIcon } from "../assets/svg/WorldIcon.svg";
import { ReactComponent as MessageIcon } from "../assets/svg/MessageIcon.svg";
import Divider from "./Divider";

function Sidebar() {
  return (
    <div className="w-20 flex flex-col items-center py-2 h-screen gap-y-2 dark:border-black">
      <HamburgerIcon />
      <div className="flex flex-col items-center">
        <BinanceIcon />
        <BlueIcon />
        <AirbnbIcon />
      </div>

      <div className="bg-violet-600 flex flex-col items-center rounded-3xl mt-4 w-12 dark:bg-zinc-700 dark:border-black">
        <CommandIcon />
        <PieIcon />
        <TimeIcon />
        <WorldIcon />
        <LightIcon />
      </div>

     <div className='flex flex-col items-center mt-auto'>
      <Divider/>
     <div className="bg-violet-600 text-white mt-auto p-4 rounded-md  dark:bg-zinc-700 ">
        <MessageIcon />
      </div>
     </div>
      
    </div>
  );
}

export default Sidebar;
