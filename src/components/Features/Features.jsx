import React from "react";
import {
  FiAlignJustify,
  FiBookOpen,
  FiTv,
  FiTwitch,
  FiWifi,
  FiSlack,
} from "react-icons/fi";
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
            <FiAlignJustify />
          </div>
          <h3 className="text-2xl ">App Development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiBookOpen />
          </div>
          <h3 className="text-2xl ">App Development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiTv />
          </div>
          <h3 className="text-2xl ">App Development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiTwitch />
          </div>
          <h3 className="text-2xl ">App Development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiWifi />
          </div>
          <h3 className="text-2xl ">App Development</h3>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence.
          </p>
        </div>
        <div className="p-10 shadow-2xl  group  rounded-xl hover:text-white hover:bg-rose-500  duration-300">
          <div className="text-4xl  w-14 h-14 p-2 group-hover:text-white  text-rose-500  rounded-full ">
            <FiSlack />
          </div>
          <h3 className="text-2xl ">App Development</h3>
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
