import React from "react";
import Cell from "./Cell";

function HeroLogo() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-3xl overflow-clip max-w-80 h-60 w-60 sm:h-72 sm:w-72 md:w-80 md:h-80 max-h-80 grid grid-cols-3 ">
      {["S", "U", "", "", "D", "O", "K", "U", ""].map((cell, index) => (
        <Cell key={index} value={cell} index={index} />
      ))}
    </div>
  );
}

export default HeroLogo;
