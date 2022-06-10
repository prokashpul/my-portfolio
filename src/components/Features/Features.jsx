import React from "react";
import { VscEditorLayout, VscMail } from "react-icons/vsc";
import { IoIosAppstore } from "react-icons/io";
import { FiMonitor, FiHeadphones, FiPieChart } from "react-icons/fi";
const Features = () => {
  return (
    <div className="my-10 md:my-20 relative" id="features">
      <small className="text-rose-500 uppercase tracking-widest">
        Features
      </small>
      <h2 className="text-3xl md:text-5xl font-bold my-2 md:my-5">What I Do</h2>
      <div className="grid md:grid-cols-3 gap-5 md:gap-10 md:my-10 ">
        <div className="p-10  shadow-2xl group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiMonitor />
          </div>
          <h3 className="text-2xl ">Web development</h3>
          <p>
            Clean, modern designs - optimized for performance, search engines,
            and converting users to customers.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <IoIosAppstore />
          </div>
          <h3 className="text-2xl ">Apps Development</h3>
          <p>
            Clean, modern App Create using react native - optimized for
            performance, ios and Android, and converting users to customers.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscEditorLayout />
          </div>
          <h3 className="text-2xl ">Responsive Design</h3>
          <p>
            A responsive design makes your website accessible to all users,
            regardless of their device.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiPieChart />
          </div>
          <h3 className="text-2xl ">Web Analytics</h3>
          <p>
            Get insights into who is browsing your site so that you can make
            smarter business decisions.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscMail />
          </div>
          <h3 className="text-2xl ">Email Template Design</h3>
          <p>
            Dynamic, modern Email Template Design - optimized for performance,
            and converting users to customers.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiHeadphones />
          </div>
          <h3 className="text-2xl ">Live Support</h3>
          <p>I always ready provide live support to my clients .</p>
        </div>
      </div>
      <svg
        className="absolute w-60 md:-left-52 top-0 -z-30 hidden md:block"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F43F5E"
          d="M54.4,-17.6C64.1,12.1,61.1,46.1,41.6,61.2C22.1,76.3,-14,72.5,-37.3,54.8C-60.5,37,-71.1,5.3,-62.7,-22.6C-54.4,-50.5,-27.2,-74.4,-2.4,-73.6C22.3,-72.8,44.7,-47.3,54.4,-17.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute w-72 md:-right-52 -bottom-24  -z-30  hidden md:block"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F43F5E"
          d="M47.5,-60.4C60.6,-55.9,69.7,-40.7,71.5,-25.5C73.2,-10.3,67.8,5,63,20.6C58.1,36.3,53.9,52.4,43.5,63.6C33.2,74.7,16.6,81,2.1,78.1C-12.3,75.2,-24.6,63,-37.1,52.5C-49.5,42,-62,33.1,-65,21.6C-68.1,10.2,-61.7,-3.9,-55,-15.8C-48.2,-27.7,-41.2,-37.4,-32,-43.1C-22.8,-48.9,-11.4,-50.8,2.9,-54.8C17.2,-58.8,34.4,-64.9,47.5,-60.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Features;
