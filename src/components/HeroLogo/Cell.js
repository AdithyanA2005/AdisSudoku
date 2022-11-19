import React, { useState } from "react";

function Cell(props) {
  let timer = 0;
  const TIMEOUT = 200;
  const [active, setActive] = useState(false);

  const mouseEnter = () => {
    setActive(true);
    setTimeout(() => setActive(false), TIMEOUT);
    clearTimeout(timer);
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      className={`${[1, 4, 7].includes(props.index) && "border-x-4"}
            ${props.index <= 5 && "border-b-4"} 
            ${active && "bg-gradient-to-r from-purple-500 to-pink-500"}
            duration-500 flex border-black font-extrabold text-2xl justify-center items-center`}
    >
      {props.value}
    </div>
  );
}

export default Cell;
