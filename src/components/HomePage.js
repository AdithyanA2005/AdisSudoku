import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroLogo from "./HeroLogo";

function HomePage() {
  return (
    <div className="flex flex-col justify-evenly h-full w-full text-white">
      <HeroLogo />

      <div className="flex flex-col gap-3 justify-center items-center">
        <Link
          to="newgame"
          className="hover:text-blue-500 hover:font-bold hover:bg-blue-100 text-xl text-center max-w-lg bg-blue-500 w-4/6 p-2.5 rounded-md"
        >
          New Game
        </Link>
        <Link
          to="/getsol"
          className="hover:text-blue-500 hover:font-bold hover:bg-blue-100 text-xl text-center max-w-lg bg-blue-400 w-4/6 p-2.5 rounded-md"
        >
          Find Solution
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
