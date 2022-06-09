import React from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
const portfolios = [
  {
    title: "Pro Electric Tools Manufacturer",
    url: "https://i.ibb.co/Z1YbKFC/Perspective-Web-Design-Mockup.jpg",
    live: "https://electric-tools-manufacturer.web.app/",
    github: "https://github.com/prokashpul/manufacturer-website-client-side",
  },
  {
    title: "WEB CAR MANAGER INVENTORY",
    url: "https://i.ibb.co/Jt5m0FN/Perspective-Web-Design-Mockup.jpg",
    live: "https://webcarmanager.web.app/",
    github:
      "https://github.com/prokashpul/car-warehouse-management-client-side",
  },
  {
    title: "Pro Electric Tools Manufacturer",
    url: "https://i.ibb.co/Z1YbKFC/Perspective-Web-Design-Mockup.jpg",
    live: "https://electric-tools-manufacturer.web.app/",
    github: "https://github.com/prokashpul/manufacturer-website-client-side",
  },
  {
    title: "Pro Electric Tools Manufacturer",
    url: "https://i.ibb.co/Z1YbKFC/Perspective-Web-Design-Mockup.jpg",
    live: "https://electric-tools-manufacturer.web.app/",
    github: "https://github.com/prokashpul/manufacturer-website-client-side",
  },
  {
    title: "Pro Electric Tools Manufacturer",
    url: "https://i.ibb.co/Z1YbKFC/Perspective-Web-Design-Mockup.jpg",
    live: "https://electric-tools-manufacturer.web.app/",
    github: "https://github.com/prokashpul/manufacturer-website-client-side",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="flex justify-center items-center flex-col gap-5">
        <small className="text-rose-500 md:mt-20 mt-10 tracking-widest">
          My Portfolio
        </small>
        <h2 className="text-3xl md:text-5xl font-bold my-2 ">My Portfolio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-16 ">
        {portfolios.map((portfolio, index) => (
          <a
            href={portfolio.live}
            className="shadow-2xl p-5 overflow-hidden rounded-xl group duration-300 cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl ">
              <img
                className="rounded-xl transform transition duration-500 group-hover:scale-110"
                src={portfolio.url}
                alt="portfolio"
              />
            </div>
            <div className="flex justify-between items-center mt-3 mx-2">
              <small className="text-rose-500">DEVELOPMENT</small>
              <a className="text-black" href={portfolio?.github}>
                <FiGithub />
              </a>
            </div>
            <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
              <span className="duration-500">{portfolio?.title}</span>
              <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 hidden" />
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
