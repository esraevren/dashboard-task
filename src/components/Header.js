import React from "react";
import Search from "./Search";
import logo from "../assets/images/frame17.jpg";
import plus from "../assets/images/Frame 2.png";
import calendar from "../assets/images/calendar.png";
import Linechart from "./Linechart";
import Donutchart from "./Donutchart";

function Header() {
  return (
    <div className="h-screen flex-1 flex flex-col">
      <header className="h-18 flex  items-center border-gray-200 ">
        <div className="flex items-center justify-center  p-4 text-slate-800 font-bold">
          Dashboard
        </div>

        <div className="flex items-center justify-center  p-4 text-gray-300 font-bold">
          Advanced Quary
        </div>

        <div className="flex items-center justify-center p-4 text-gray-300 font-bold">
          Events
        </div>
        <Search />
      </header>

      <div className="flex justify-start gap-x-7 mt-9 ml-4 text-sm">
        <div className="text-purple-900 font-bold"> DASHBOARD</div>
        <div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 10.5L8.75 7L5.25 3.5"
              stroke="#D0D1D2"
              stroke-width="1.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="text-gray-300 font-light">BITFOREX.COM</div>
      </div>

      <div className="flex justify-start gap-x-7 mt-9 ml-4 text-sm">
        <div>
          <img src={logo}></img>
        </div>
        <div className="text-slate-800 font-medium text-2xl mt-1">
          wubin.design
        </div>
        <div className="bg-purple-600 mb-5 rounded-full  p-2">
          <button>
            <img src={plus}></img>
          </button>
        </div>
      </div>

      <div class="flex justify-between ml-4 mt-3">
        <div className="flex  ">
          <div className="text-slate-800 font-bold">Total visits</div>
          <span className="ml-2 mt-[3px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 16.5001C13.1421 16.5001 16.5 13.1423 16.5 9.00012C16.5 4.85799 13.1421 1.50012 9 1.50012C4.85786 1.50012 1.5 4.85799 1.5 9.00012C1.5 13.1423 4.85786 16.5001 9 16.5001Z"
                stroke="#D0D1D2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 6.00012V9.00012"
                stroke="#D0D1D2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="9" cy="12" r="0.75" fill="#D0D1D2" />
            </svg>
          </span>
        </div>

        <div className="flex justify-between gap-x-4 mr-6">
          <div>
            <svg
              width="61"
              height="4"
              viewBox="0 0 61 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="59"
                y1="2"
                x2="2"
                y2="2"
                stroke="#ECE9F1"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-gray-300 font-light">Provisions Month</div>
          <div className="border-2 border-slate-300 flex p-1 mt-[-6px] text-sm">
            <div className="text-slate-800 justify-center">March 2022</div>
            <div className="flex justify-center items-center ml-3">
              <img src={calendar}></img>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.00016 8.16671C7.64449 8.16671 8.16683 7.64437 8.16683 7.00004C8.16683 6.35571 7.64449 5.83337 7.00016 5.83337C6.35583 5.83337 5.8335 6.35571 5.8335 7.00004C5.8335 7.64437 6.35583 8.16671 7.00016 8.16671Z"
                stroke="#422F8A"
                stroke-opacity="0.87"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6667 8.16671C12.311 8.16671 12.8333 7.64437 12.8333 7.00004C12.8333 6.35571 12.311 5.83337 11.6667 5.83337C11.0223 5.83337 10.5 6.35571 10.5 7.00004C10.5 7.64437 11.0223 8.16671 11.6667 8.16671Z"
                stroke="#422F8A"
                stroke-opacity="0.87"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.33317 8.16671C2.9775 8.16671 3.49984 7.64437 3.49984 7.00004C3.49984 6.35571 2.9775 5.83337 2.33317 5.83337C1.68884 5.83337 1.1665 6.35571 1.1665 7.00004C1.1665 7.64437 1.68884 8.16671 2.33317 8.16671Z"
                stroke="#422F8A"
                stroke-opacity="0.87"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-4">
        <Linechart />
      </div>

      <div className="flex flex-row ml-4">
        <div className="flex basis-1/2">
          <div className="text-slate-800 font-bold">Perpetual</div>
          <div className="ml-2 mt-1">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 16.5001C13.1421 16.5001 16.5 13.1423 16.5 9.00012C16.5 4.85799 13.1421 1.50012 9 1.50012C4.85786 1.50012 1.5 4.85799 1.5 9.00012C1.5 13.1423 4.85786 16.5001 9 16.5001Z"
                  stroke="#D0D1D2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 6.00012V9.00012"
                  stroke="#D0D1D2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="9" cy="12" r="0.75" fill="#D0D1D2" />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex basis-1/2">
          <div className="text-slate-800 font-bold">Active Percentage</div>
          <div className="ml-2 mt-1">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 16.5001C13.1421 16.5001 16.5 13.1423 16.5 9.00012C16.5 4.85799 13.1421 1.50012 9 1.50012C4.85786 1.50012 1.5 4.85799 1.5 9.00012C1.5 13.1423 4.85786 16.5001 9 16.5001Z"
                  stroke="#D0D1D2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 6.00012V9.00012"
                  stroke="#D0D1D2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="9" cy="12" r="0.75" fill="#D0D1D2" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="ml-4 mt-4"><Donutchart></Donutchart></div>
    </div>
  );
}

export default Header;
