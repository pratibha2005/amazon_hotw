import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-3 border-b border-gray-700 bg-orange-700 text-white justify-end pr-9">
      <Link
        to="/"
        className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gray-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
      >
        Home
      </Link>
      <Link
        to="/dashboard"
        className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gray-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
      >
        Dashboard
      </Link>
      <Link
        to="/login"
        className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gray-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
      >
        Login
      </Link>
    </nav>
  );
}
