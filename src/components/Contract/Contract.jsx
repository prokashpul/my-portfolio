import React from "react";
import { useForm } from "react-hook-form";
import {
  FiArrowRight,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contract = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { yes_i_understand: false } });
  // Submit your data into Redux store
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mj8kyrq",
        "template_f5mnbtc",
        e.target,
        "1J5K-uIYzMdeqtSOq"
      )
      .then(
        (result) => {
          Swal.fire(
            "Email Send Successfully",
            "You clicked the ok button!",
            "success"
          );
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="relative" id="contract">
      <div className="flex justify-center items-center flex-col gap-5">
        <small className="text-rose-500 md:mt-20 mt-10 tracking-widest">
          CONTACT
        </small>
        <h2 className="text-3xl md:text-5xl font-bold my-2 ">
          Contact With Me
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-10 mb-16 ">
        <div className="md:shadow-2xl shadow-md p-5 md:p-10 group rounded-2xl">
          <div className="rounded-2xl overflow-hidden">
            <img
              className="w-full duration-500 group-hover:scale-110"
              src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
              alt="Contract"
            />
          </div>
          <h2 className="font-bold text-2xl mt-5 md:mt-10">PROKASH PUL</h2>
          <small className="text-rose-500">Full Stack Web Developer</small>
          <p className="my-5">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <div className="font-bold">
            Phone: -
            <a
              href="tel:+8801642133102"
              className="hover:text-rose-500 duration-500"
            >
              01642133102
            </a>
          </div>
          <div className="font-bold">
            Email: -
            <a
              href="mailto:prokashpul2@gmail.com"
              className="hover:text-rose-500 duration-500"
            >
              prokashpul2@gmail.com
            </a>
          </div>
          <div className="mt-5">
            <h4>FIND WITH ME</h4>
            <ul className="flex justify-start items-center gap-5 my-2 md:my-5">
              <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl[">
                <a href="https://www.linkedin.com/in/prokash-pul/">
                  <FiLinkedin className="font-bold text-3xl" />
                </a>
              </li>
              <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl[">
                <a href="https://www.facebook.com/prokash.pul">
                  <FiFacebook className="font-bold text-3xl" />
                </a>
              </li>
              <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl[">
                <a href="https://www.instagram.com/prokash_pul/">
                  <FiInstagram className="font-bold text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:shadow-2xl shadow-md p-5 md:p-10 rounded-2xl">
          <h2 className="text-center font-bold text-2xl my-5">Contact </h2>
          <form className="mt-10" onSubmit={sendEmail}>
            <div className="md:flex  gap-5">
              <div className="mb-5 w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  {...register("name", { required: true })}
                  className="w-full border-2 border-gray-300 focus-within:outline-rose-500 rounded-md h-14 pl-2"
                />
                <small className="text-red-500">
                  {errors.name?.type === "required" && "Name is required"}
                </small>
              </div>
              <div className="mb-5 w-full">
                <input
                  type="number"
                  placeholder="Phone Number"
                  {...register("phoneNumber", { required: true })}
                  className="w-full border-2 border-gray-300 focus-within:outline-rose-500  rounded-md h-14 pl-2"
                />
                <small className="text-red-500">
                  {errors.phoneNumber && "Phone Number is required"}
                </small>
              </div>
            </div>
            <div className="mb-5 w-full">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full border-2 border-gray-300 focus-within:outline-rose-500  rounded-md h-14 pl-2"
              />
              <small className="text-red-500">
                {errors.email && "Email is required"}
              </small>
            </div>
            <div className="mb-5 w-full">
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: true })}
                className="w-full border-2 border-gray-300 focus-within:outline-rose-500  rounded-md h-14 pl-2"
              />
              <small className="text-red-500">
                {errors.subject && "Subject is required"}
              </small>
            </div>
            <div className="mb-5 w-full">
              <textarea
                type="text"
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="w-full border-2 border-gray-300 focus-within:outline-rose-500  rounded-md h-56 pl-2"
              />
              <small className="text-red-500">
                {errors.message && "Message is required"}
              </small>
            </div>

            <button
              type="submit"
              className="w-full shadow-2xl bg-slate-300 h-14 rounded-md hover:bg-rose-500 duration-500  cursor-pointer hover:text-white flex gap-1 items-center justify-center text-red-500 font-semibold hover:scale-105"
            >
              Submit <FiArrowRight className="text-2xl font-bold" />
            </button>
          </form>
        </div>
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
        className="absolute w-72 md:-right-52 top-24  -z-30  hidden md:block"
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

export default Contract;
