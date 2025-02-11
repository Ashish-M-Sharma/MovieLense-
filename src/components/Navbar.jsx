import { Search } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery, setTriggerSearch }) => {
  const handleSearchClick = () => {
    setTriggerSearch(true);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg py-3">
      <div className="w-[900px] mx-auto flex justify-between items-center px-6">
        <NavLink to="/">
          {" "}
          <p className="text-white text-2xl font-semibold tracking-wide">
            Movies Arena
          </p>
        </NavLink>

        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md transition-all duration-300"
          />
          <NavLink>
            <Search
              className="absolute right-3 text-white top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer active:scale-85 transition duration-300 text-xl"
              onClick={handleSearchClick}
            />
          </NavLink>
        </div>

        {/* <NavLink to="/Movies" className="text-white font-medium">
          Movies
        </NavLink> */}
        {/* <NavLink to="/MovieDetails" className="text-white font-medium">
          Movie Details
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
