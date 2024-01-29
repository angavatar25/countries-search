import { useState } from "react";

interface TNavBar {
  isDarkMode: boolean;
};

const NavBar = (props: TNavBar) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkNightMode = () => {
    setIsDarkMode(!isDarkMode);

    localStorage.setItem('weatherDarkMode', String(isDarkMode));
  }
  return (
    <div className={`${props.isDarkMode ? 'bg-blue-dark-blue text-white' : 'bg-white text-blue-very-dark-blue-light-mode'} px-10 py-6 fixed w-full left-0 top-0`}>
      <div className="flex justify-between">
        <p className=" text-2xl font-bold">Where in the world</p>
        <button
          onClick={handleDarkNightMode}
          className="bg-transparent outline-none border-none"
        >
          Dark mode
        </button>
      </div>
    </div>
  )
};

export default NavBar;
