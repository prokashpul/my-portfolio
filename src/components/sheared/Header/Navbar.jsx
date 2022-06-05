import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("shadow-xl", window.scrollY > 100);
  });
  return (
    <header className=" w-full top-0 sticky hidden md:block z-50 bg-white">
      <nav className="flex px-10 rounded-b-3xl   justify-between items-center h-20 style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : 'transparent'}}">
        <div className="font-bold text-2xl inline-flex items-center gap-2">
          <img
            src="https://simgbb.com/avatar/cK0cy33dYQGL.jpg"
            alt=""
            width="35"
            height="35"
            className="rounded-full border-2  border-rose-500"
          />
          <h2 className="text-rose-500 uppercase text-3xl">
            Pro<span className="text-black">kash</span>
          </h2>
        </div>

        <ul className="flex justify-center items-center gap-0 uppercase h-full ">
          <li className="hover:border-b-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="text-xl "
            >
              Home
            </Link>
          </li>
          <li className=" hover:border-b-4 p-3 border-rose-500 cursor-pointer  hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-xl "
            >
              FEATURES
            </Link>
          </li>
          <li className="hover:border-b-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-xl "
            >
              PORTFOLIO
            </Link>
          </li>
          <li className="hover:border-b-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-xl "
            >
              Skills
            </Link>
          </li>
          <li className="hover:border-b-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 duration-500 h-full flex items-center">
            <Link
              to="contract"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-xl "
            >
              Contract
            </Link>
          </li>
        </ul>

        <div className="flex justify-end ">
          <a
            className="bg-rose-500 px-6 py-2 rounded-full hover:bg-rose-700 hover:shadow-xl duration-500 text-white uppercase "
            href="https://drive.google.com/uc?id=1tuzvDL5LNSLdypxRVWcOUvfPSs_ihk_R&export=download"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
