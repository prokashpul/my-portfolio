import React from "react";
import { Link } from "react-scroll";
const navBar = [
  { link: "features", name: "features", id: 2 },
  { link: "portfolio", name: "portfolio", id: 3 },
  { link: "skills", name: "skills", id: 4 },
  { link: "contract", name: "contract", id: 5 },
];
console.log(window.location.pathname);
const Navbar = () => {
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("shadow-xl", window.scrollY > 100);
  });

  return (
    <header className=" w-full top-0 sticky hidden md:block z-50 bg-white">
      <nav className="flex px-10 rounded-b-3xl  h-[68px] justify-between items-center  style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : 'transparent'}}">
        <div className="font-bold text-2xl inline-flex items-center gap-2">
          <img
            src="https://simgbb.com/avatar/cK0cy33dYQGL.jpg"
            alt=""
            width="35"
            height="35"
            className="rounded-full border-2  border-rose-500"
          />
          <h2 className="text-rose-500 uppercase text-3xl">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Pro<span className="text-black">kash</span>
            </Link>
          </h2>
        </div>

        <ul className="flex justify-center items-center gap-0 uppercase h-full ">
          <Link
            activeClass="border-b-4 border-rose-500 duration-300 bg-gray-200"
            className="hover:border-b-4 p-5 border-rose-500  cursor-pointer hover:bg-gray-200"
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            HOME
          </Link>
          {navBar.map((nav) => (
            <li
              key={nav.id}
              className={` duration-500 h-full flex items-center`}
            >
              <Link
                activeClass="border-b-4 border-rose-500 duration-1000 bg-gray-200"
                className="hover:border-b-4 p-5 border-rose-500  cursor-pointer hover:bg-gray-200"
                to={nav.link}
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                {nav.name}
              </Link>
            </li>
          ))}
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
