import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col max-h-screen h-screen bg-black">
      <Navbar />
      <main className="relative flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
