import React from "react";
import { ThemeContext } from "./themeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return theme === "dark" ? (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
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
  ) : (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
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
          d="M12.2502 7.46083C11.9949 10.2234 9.63428 12.3105 6.86126 12.2252C4.08825 12.14 1.86018 9.91198 1.77498 7.13896C1.68977 4.36595 3.77684 2.0053 6.53939 1.75C5.33794 3.37543 5.50646 5.63526 6.93571 7.06452C8.36496 8.49377 10.6248 8.66229 12.2502 7.46083V7.46083Z"
          stroke="#11263C"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default Toggle;
