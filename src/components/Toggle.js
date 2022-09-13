import React from "react";
import { ThemeContext } from "./themeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return theme === "dark" ? (
    <button
    onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark') }
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.2502 17.4608C21.9949 20.2234 19.6343 22.3105 16.8613 22.2252C14.0882 22.14 11.8602 19.912 11.775 17.139C11.6898 14.3659 13.7768 12.0053 16.5394 11.75C15.3379 13.3754 15.5065 15.6353 16.9357 17.0645C18.365 18.4938 20.6248 18.6623 22.2502 17.4608V17.4608Z"
          stroke="#11263C"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  ) : (
    <button  onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark') }>
      
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
          d="M7.00016 9.91665C8.61099 9.91665 9.91683 8.61081 9.91683 6.99998C9.91683 5.38915 8.61099 4.08331 7.00016 4.08331C5.38933 4.08331 4.0835 5.38915 4.0835 6.99998C4.0835 8.61081 5.38933 9.91665 7.00016 9.91665Z"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 0.583313V1.74998"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 12.25V13.4167"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.46191 2.46167L3.29025 3.29"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.71 10.7101L11.5383 11.5384"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.583496 7H1.75016"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.25 7H13.4167"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.46191 11.5384L3.29025 10.7101"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.71 3.29L11.5383 2.46167"
          stroke="white"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default Toggle;



