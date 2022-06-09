import React from "react";
import {
  VscTerminalCmd,
  VscEditorLayout,
  VscGlobe,
  VscMail,
} from "react-icons/vsc";
import { FiMonitor, FiSlack } from "react-icons/fi";
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
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscTerminalCmd />
          </div>
          <h3 className="text-2xl ">Apps Development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscEditorLayout />
          </div>
          <h3 className="text-2xl ">Responsive Design</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscGlobe />
          </div>
          <h3 className="text-2xl ">SEO Optimization</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscMail />
          </div>
          <h3 className="text-2xl ">Email Template Design</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  md:hover:scale-110 hover:scale-105 duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiSlack />
          </div>
          <h3 className="text-2xl ">Live Support</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
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
        className="absolute w-60 md:-right-52 -bottom-20 -z-30  hidden md:block"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F43F5E"
          d="M54.4,-17.6C64.1,12.1,61.1,46.1,41.6,61.2C22.1,76.3,-14,72.5,-37.3,54.8C-60.5,37,-71.1,5.3,-62.7,-22.6C-54.4,-50.5,-27.2,-74.4,-2.4,-73.6C22.3,-72.8,44.7,-47.3,54.4,-17.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Features;
