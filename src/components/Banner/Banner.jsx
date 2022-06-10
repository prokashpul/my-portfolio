import React from "react";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2  gap-5 items-center mb-10 md:mb-20 relative"
      id="home"
    >
      <div className=" flex flex-col justify-center">
        <div>
          <small className="tracking-widest text-rose-500">
            WELCOME TO MY WORLD
          </small>
          <div className="font-bold my-2 md:my-5">
            <h2 className="text-3xl md:text-5xl">
              Hi, I’m <span className="text-rose-500">Proksah Pul</span>
            </h2>

            <h3 className="text-xl md:text-3xl mt-2 md:mt-5 uppercase">
              <Typical
                steps={[
                  "MERN Stack Developer",
                  4000,
                  "Full Stack Web Developer",
                  4000,
                  "Front-End Developer",
                  4000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
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
            <a
              className="hover:bg-rose-500 px-8 py-2 rounded-full border-2 border-rose-500 text-red-500  hover:shadow-xl duration-500 hover:text-white uppercase "
              href="https://drive.google.com/uc?id=1tuzvDL5LNSLdypxRVWcOUvfPSs_ihk_R&export=download"
            >
              Resume
            </a>
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
          src="https://i.ibb.co/4ZsDb9X/prokash-removebg-preview.png"
          alt="prokash Pul"
          className="w-[100%] md:w-[420px] h-[400px] md:h-[500px] rounded-2xl border-8 border-rose-100 hover:border-rose-500 drop-shadow-2xl hover:drop-shadow-none duration-300"
        />
      </div>
      <svg
        className="absolute w-60 md:-left-52 top-0 -z-30  hidden md:block"
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

export default Banner;
