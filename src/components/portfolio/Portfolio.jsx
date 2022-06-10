import React from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import Swal from "sweetalert2";

const portfolios = [
  {
    title: "Pro Electric Tools Manufacturer",
    url: "https://i.ibb.co/Z1YbKFC/Perspective-Web-Design-Mockup.jpg",
    live: "https://electric-tools-manufacturer.web.app/",
    githubClient:
      "https://github.com/prokashpul/manufacturer-website-client-side",
    githubServer:
      "https://github.com/programming-hero-web-course1/manufacturer-website-server-side-prokashpul",
    _id: 1,
    about1:
      "Users and admins can log in and register to the website using the firebase authentication system and reset the password, and purchases item",
    about2:
      "Users Can edit profiles, send feedback, and pay to the card, remove items, And the admin can control users, payments, add products, add blogs",
    about3:
      "Fully responsively, it built this website using react,nodeJs, row CSS,react-router, and many ReactJs components library",
    feature:
      "React router, React form, Firebase, ASO, React table, MongoDB, stripe, Axios, React Query, React rating stars, etc.",
  },
  {
    title: "WEB CAR MANAGER INVENTORY",
    url: "https://i.ibb.co/Jt5m0FN/Perspective-Web-Design-Mockup.jpg",
    live: "https://webcarmanager.web.app/",
    githubClient:
      "https://github.com/prokashpul/car-warehouse-management-client-side",
    githubServer:
      "https://github.com/prokashpul/cr-warehouse-management-server-side",
    _id: 2,
    about1: "Home page inventory section dynamic and update option",
    about2: "All inventory page show item display table and item delete option",
    about3: "Email and password and google login with firebase",
    feature:
      "React router, React form, Firebase, ASO, React table, MongoDB, etc.",
  },
  {
    title: "Convention Center",
    url: "https://i.ibb.co/cgmRR3T/Perspective-Web-Design-Mockup.jpg",
    live: "https://proweb-conv-assiment3.netlify.app/",
    githubClient: "https://github.com/prokashpul/convension-center-project",
    githubServer: "",
    _id: 3,
    about1: "Single Page Design",
    about2: "Nav menu Fixed and Fully mobile responsive",
    about3: "Banner slider and prices section",
    feature: "react ,React router,  netlify,  etc.",
  },
];
const handelClick = (id) => {
  const item = portfolios.find((i) => i._id === id);
  console.log(item);
  Swal.fire({
    title: `<strong>${item.title}</strong>`,
    imageUrl: `${item?.url}`,
    imageWidth: "100%",
    imageHeight: 350,
    imageAlt: "Custom image",
    width: "60%",
    html: `
    <strong>Details:</strong>
    <br>
    <ul>
    <li>1. ${item.about1}</li>
    <li>1. ${item.about2}</li>
    <li>1. ${item.about3}</li>
    <li><strong> The technology used:</strong> ${item.feature}</li>
    </ul>`,
    showCloseButton: true,
    showCancelButton: true,
    showDenyButton: true,
    focusConfirm: true,
    confirmButtonText: `<a href=${item?.live} target="_blank">Live</a>`,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `<a href=${item?.githubClient} target="_blank">GitHub client</a>`,
    denyButtonText: `<a href=${
      item?.githubServer ? item?.githubServer : "/"
    } target="_blank">GitHub Server</a>`,
    cancelButtonAriaLabel: "Thumbs down",
  });
};

const Portfolio = () => {
  return (
    <div id="portfolio" className="relative">
      <div className="flex justify-center items-center flex-col gap-5">
        <small className="text-rose-500 md:mt-20 mt-10 tracking-widest">
          My Portfolio
        </small>
        <h2 className="text-3xl md:text-5xl font-bold my-2 ">My Portfolio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-16 ">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio._id}
            onClick={() => handelClick(portfolio._id)}
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
              <small className="text-rose-500  uppercase">DEVELOPMENT</small>
              <a className="text-black  " href={portfolio?.githubClient}>
                <FiGithub />
              </a>
            </div>
            <h3 className="text-2xl font-bold  group-hover:text-rose-500 mt-5 ">
              <span className="duration-500 uppercase">{portfolio?.title}</span>
              <FiArrowUpRight className="group-hover:inline-block font-bold duration-500 hidden" />
            </h3>
          </div>
        ))}
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

export default Portfolio;
