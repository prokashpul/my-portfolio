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
    <div className="my-10 md:my-20" id="features">
      <small className="text-rose-500 uppercase tracking-widest">
        Features
      </small>
      <h2 className="text-3xl md:text-5xl font-bold my-2 md:my-5">What I Do</h2>
      <div className="grid md:grid-cols-3 gap-5 md:gap-10 md:my-10 ">
        <div className="p-10  shadow-2xl group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiMonitor />
          </div>
          <h3 className="text-2xl ">Web development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscTerminalCmd />
          </div>
          <h3 className="text-2xl ">Apps Development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscEditorLayout />
          </div>
          <h3 className="text-2xl ">Responsive Design</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscGlobe />
          </div>
          <h3 className="text-2xl ">SEO Optimization</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <VscMail />
          </div>
          <h3 className="text-2xl ">Email Template Design</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
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
    </div>
  );
};

export default Features;
