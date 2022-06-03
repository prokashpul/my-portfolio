import React from "react";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
const Banner = () => {
  return (
    <div
      id="home"
      className="grid grid-cols-1 md:grid-cols-2  gap-5 items-center mb-10 md:mb-20"
    >
      <div className=" flex flex-col justify-center">
        <div>
          <small>WELCOME TO MY WORLD</small>
          <div className="font-bold my-2 md:my-5">
            <h2 className="text-3xl md:text-5xl">
              Hi, I’m <span className="text-rose-500">Proksah Pul</span>
            </h2>

            <h3 className="text-xl md:text-3xl mt-2 md:mt-5">
              Full Stack Web Developer.
            </h3>
          </div>
          <p>
            I love to use my creativity and take on challenges. So I love
            working with React.js and Tailwind. Over the current year, I have
            accumulated knowledge on various aspects of web development. My goal
            is to be an outstanding full-stack web developer who can create
            beautiful UIs and manage back-end smoothly.
          </p>
          <div className="flex justify-start mt-5 ">
            <button className="hover:bg-rose-500 px-8 py-2 rounded-full border-2 border-rose-500 text-red-500  hover:shadow-xl duration-500 hover:text-white uppercase ">
              Resume
            </button>
          </div>
        </div>
        <div className="my-5">
          <h4>FIND WITH ME</h4>
          <ul className="flex justify-start items-center gap-5 my-2 md:my-5">
            <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl">
              <a href="https://www.linkedin.com/in/prokash-pul/">
                <FiLinkedin />
              </a>
            </li>
            <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl">
              <a href="https://www.facebook.com/prokash.pul">
                <FiFacebook />
              </a>
            </li>
            <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl">
              <a href="https://www.instagram.com/prokash_pul/">
                <FiInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center order-first md:order-last">
        <img
          src="https://i.ibb.co/BnQkY8S/pro.jpg"
          alt="prokash Pul"
          className="w-[100%] md:w-[420px] h-[400px] md:h-[500px] rounded-2xl border-8 border-slate-200 drop-shadow-2xl hover:drop-shadow-none duration-300"
        />
      </div>
    </div>
  );
};

export default Banner;
