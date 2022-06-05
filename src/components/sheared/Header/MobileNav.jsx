import React from "react";
import { Link } from "react-scroll";
import {
  FiHome,
  FiLifeBuoy,
  FiLayers,
  FiHeadphones,
  FiSlack,
} from "react-icons/fi";

const MobileNav = () => {
  return (
    <header className=" w-full bottom-0 fixed block md:hidden z-50 ">
      <nav className="flex px-10 rounded-t-3xl shadow-3xl bg-slate-200  justify-between items-center h-16 overflow-hidden">
        <ul className="flex justify-around items-center gap-3 uppercase h-full w-full text-rose-500">
          <li
            title="Home"
            className="text-3xl hover:border-t-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
            >
              <FiHome />
            </Link>
          </li>
          <li
            title="Features"
            className="text-3xl hover:border-t-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center "
          >
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <FiLifeBuoy />
            </Link>
          </li>
          <li
            title="Portfolio"
            className="text-3xl hover:border-t-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center "
          >
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <FiLayers />
            </Link>
          </li>
          <li
            title="Skills"
            className="text-3xl hover:border-t-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center "
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <FiSlack />
            </Link>
          </li>
          <li
            title="Contract"
            className="text-3xl hover:border-t-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center "
          >
            <Link
              to="contract"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <FiHeadphones />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileNav;
