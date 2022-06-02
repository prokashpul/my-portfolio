import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" w-full top-0 sticky hidden md:block">
      <nav className="flex px-10 rounded-b-3xl shadow-xl  justify-between items-center h-20">
        <div className="font-bold text-2xl inline-flex items-center gap-2">
          <img
            src="https://simgbb.com/avatar/cK0cy33dYQGL.jpg"
            alt=""
            width="30"
            height="30"
            className="rounded-full border-2  border-green-400"
          />
          <h2 className="text-green-400 uppercase">
            Pro<span className="text-black">kash</span>
          </h2>
        </div>

        <ul className="flex justify-center items-center gap-0 uppercase h-full ">
          <li className="hover:border-b-4 p-3 border-green-400  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link to="/" className="text-xl font-semibold">
              Home
            </Link>
          </li>
          <li className=" hover:border-b-4 p-3 border-green-400 cursor-pointer  hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link to="/" className="text-xl font-semibold">
              FEATURES
            </Link>
          </li>
          <li className="hover:border-b-4 p-3 border-green-400  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link to="/" className="text-xl font-semibold">
              PORTFOLIO
            </Link>
          </li>
          <li className="hover:border-b-4 p-3 border-green-400  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link to="/" className="text-xl font-semibold">
              Skills
            </Link>
          </li>
          <li className="hover:border-b-4 p-3 border-green-400  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link to="/" className="text-xl font-semibold">
              Contract
            </Link>
          </li>
        </ul>

        <div className="flex justify-end ">
          <button className="bg-green-400 px-6 py-2 rounded-full hover:bg-green-700 hover:shadow-xl duration-500 text-white">
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
