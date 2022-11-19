import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header className="flex justify-between items-center py-4 md:py-8">
          <Link
            to="/"
            className="inline-flex text-white items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
            aria-label="logo"
          >
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="w-6 h-auto text-blue-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Adoku
          </Link>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <Link
              to={location.pathname === "/" ? "/newgame" : "/"}
              className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              {location.pathname === "/" ? "New Game" : "Home"}
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
