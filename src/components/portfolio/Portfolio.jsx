import React from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
const Portfolio = () => {
  return (
    <>
      <div
        className="flex justify-center items-center flex-col gap-5"
        id="portfolio"
      >
        <small className="text-rose-500 md:mt-20 mt-10 tracking-widest">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </small>
        <h2 className="text-3xl md:text-5xl font-bold my-2 ">My Portfolio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-16 ">
        <div className="shadow-2xl p-5 overflow-hidden rounded-xl group duration-300 cursor-pointer">
          <div className="overflow-hidden rounded-xl ">
            <img
              className="rounded-xl transform transition duration-500 group-hover:scale-110"
              src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"
              alt="portfolio"
            />
          </div>
          <div className="flex justify-between items-center mt-3 mx-2">
            <small className="text-rose-500">DEVELOPMENT</small>
            <a className="text-black" href="/">
              <FiGithub />
            </a>
          </div>
          <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
            <span className="duration-500">
              The services provide for design
            </span>
            <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 hidden" />
          </h3>
        </div>
        <div className="shadow-2xl p-5 overflow-hidden rounded-xl group duration-300 cursor-pointer">
          <div className="overflow-hidden rounded-xl ">
            <img
              className="rounded-xl transform transition duration-500 group-hover:scale-110"
              src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"
              alt="portfolio"
            />
          </div>
          <div className="flex justify-between items-center mt-3 mx-2">
            <small className="text-rose-500">DEVELOPMENT</small>
            <a className="text-black" href="/">
              <FiGithub />
            </a>
          </div>
          <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
            <span className="duration-500">
              The services provide for design
            </span>
            <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 text-transparent" />
          </h3>
        </div>
        <div className="shadow-2xl p-5 overflow-hidden rounded-xl group duration-300 cursor-pointer">
          <div className="overflow-hidden rounded-xl ">
            <img
              className="rounded-xl transform transition duration-500 group-hover:scale-110"
              src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"
              alt="portfolio"
            />
          </div>
          <div className="flex justify-between items-center mt-3 mx-2">
            <small className="text-rose-500">DEVELOPMENT</small>
            <a className="text-black" href="/">
              <FiGithub />
            </a>
          </div>
          <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
            <span className="duration-500">
              The services provide for design
            </span>
            <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 hidden" />
          </h3>
        </div>
        <div className="shadow-2xl p-5 overflow-hidden rounded-xl group duration-300 cursor-pointer">
          <div className="overflow-hidden rounded-xl ">
            <img
              className="rounded-xl transform transition duration-500 group-hover:scale-110"
              src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"
              alt="portfolio"
            />
          </div>
          <div className="flex justify-between items-center mt-3 mx-2">
            <small className="text-rose-500">DEVELOPMENT</small>
            <a className="text-black" href="/">
              <FiGithub />
            </a>
          </div>
          <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
            <span className="duration-500">
              The services provide for design
            </span>
            <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 hidden" />
          </h3>
        </div>
        <div className="shadow-2xl p-5 overflow-hidden rounded-xl group duration-300 cursor-pointer">
          <div className="overflow-hidden rounded-xl ">
            <img
              className="rounded-xl transform transition duration-500 group-hover:scale-110"
              src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"
              alt="portfolio"
            />
          </div>
          <div className="flex justify-between items-center mt-3 mx-2">
            <small className="text-rose-500">DEVELOPMENT</small>
            <a className="text-black" href="/">
              <FiGithub />
            </a>
          </div>
          <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
            <span className="duration-500">
              The services provide for design
            </span>
            <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 hidden" />
          </h3>
        </div>
        <div className="shadow-2xl p-5 overflow-hidden rounded-xl group duration-300 cursor-pointer">
          <div className="overflow-hidden rounded-xl ">
            <img
              className="rounded-xl transform transition duration-500 group-hover:scale-110"
              src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"
              alt="portfolio"
            />
          </div>
          <div className="flex justify-between items-center mt-3 mx-2">
            <small className="text-rose-500">DEVELOPMENT</small>
            <a className="text-black" href="/">
              <FiGithub />
            </a>
          </div>
          <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
            <span className="duration-500">
              The services provide for design
            </span>
            <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 hidden" />
          </h3>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
