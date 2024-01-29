interface TNavBar {
  isDarkMode: boolean;
  handleDarkMode: () => void;
};

const NavBar = (props: TNavBar) => {
  return (
    <div className={`${props.isDarkMode ? 'bg-blue-dark-blue text-white' : 'bg-white text-blue-very-dark-blue-light-mode shadow-md'} transition px-10 py-6 fixed w-full left-0 top-0`}>
      <div className="flex justify-between">
        <p className=" text-2xl font-bold">Where in the world</p>
        <button
          onClick={props.handleDarkMode}
          className="bg-transparent outline-none border-none"
        >
          {props.isDarkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </div>
  )
};

export default NavBar;
