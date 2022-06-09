import React from "react";
import { Link } from "react-scroll";
import {
  FiHome,
  FiLifeBuoy,
  FiLayers,
  FiHeadphones,
  FiSlack,
} from "react-icons/fi";

const navBar = [
  { link: "features", name: "features", icon: FiLifeBuoy, id: 2 },
  { link: "portfolio", name: "portfolio", icon: FiLayers, id: 3 },
  { link: "skills", name: "skills", icon: FiSlack, id: 4 },
  { link: "contract", name: "contract", icon: FiHeadphones, id: 5 },
];
const MobileNav = () => {
  return (
    <header className=" w-full bottom-0 fixed block md:hidden z-50 ">
      <nav className="flex px-10 rounded-t-3xl shadow-3xl bg-slate-200  justify-between items-center h-16 overflow-hidden">
        <ul className="flex justify-around items-center gap-2 uppercase h-full w-full text-rose-500">
          <li className="duration-500 h-full flex items-center">
            <Link
              activeClass="border-t-4 border-rose-500 duration-1000 bg-gray-200"
              className="hover:border-t-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 text-4xl"
              title="home"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {<FiHome />}
            </Link>
          </li>
          {navBar.map((nav) => (
            <li key={nav.id} className="duration-500 h-full flex items-center">
              <Link
                activeClass="border-t-4 border-rose-500 duration-1000 bg-gray-200"
                className="hover:border-t-4 p-3 border-rose-500  cursor-pointer hover:bg-gray-200 text-4xl"
                title={nav.name}
                to={nav.link}
                spy={true}
                smooth={true}
                offset={-2}
                duration={500}
              >
                {<nav.icon />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileNav;
