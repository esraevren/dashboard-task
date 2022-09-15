import React from "react";
import logo from "../assets/images/frame17.jpg";
import plus from "../assets/images/Frame 2.png";
import calendar from "../assets/images/calendar.png";
import Linechart from "./Linechart";
import Donutchart from "./Donutchart";
import { ReactComponent as BiggerIcon } from "../assets/svg/BiggerIcon.svg";
import { ReactComponent as MoreIcon } from "../assets/svg/MoreIcon.svg";
import SubTitle from "./SubTitle";
import ProgressBar from "./ProgressBar";

function Main() {
  return (
    <div>
      <div className="pl-8 flex items-center gap-x-6 pt-7 justify-start  text-xs  ">
        <div className="text-purple-900 font-bold"> DASHBOARD</div>
        <BiggerIcon></BiggerIcon>
        <div className="text-gray-300 font-light">BITFOREX.COM</div>
      </div>

      <div className="pl-8 flex items-center gap-x-6 pt-4 justify-start">
        <img src={logo} alt="" className="w-[35px] h-[35px] dark:rounded-xl"/>
        <h1 className="text-slate-800 font-medium text-xl  dark:text-white">
          wubin.design
        </h1>
        <button className="bg-violet-600 rounded-full p-1 dark:bg-zinc-700">
          <img src={plus} alt=""/>
        </button>
      </div>

      <div className="flex flex-row pl-8  items-center gap-x-3 pt-5 mr-6 ">
        <SubTitle>Total Visits</SubTitle>

        <div className="flex ml-auto gap-x-5 items-center">
          <div className="h-[2px] w-10 bg-gray-300 my-2"></div>
          <span className=" text-xs text-gray-300 font-light">
            Provisions Month
          </span>
          <div className="flex items-center gap-2 border border-gray-600 border-1 p-1 rounded-sm">
            <span className="text-xs text-slate-800 dark:text-white ">March 2020</span>
            <img src={calendar} alt="" />
          </div>

          <MoreIcon />
        </div>
      </div>

      <Linechart />

      <div className='flex pl-8'>

        <div className='flex-1'>
          <SubTitle>Perpetual</SubTitle>
          <Donutchart/>
        </div>

        <div className='flex-1'>
          <SubTitle>Active Percentage</SubTitle>
          <ProgressBar/>
        </div>

      </div>

     
    </div>
  );
}

export default Main;
