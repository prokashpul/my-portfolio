import React from "react";
import { useForm } from "react-hook-form";
import {
  FiArrowRight,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
const Contract = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Submit your data into Redux store
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div
        className="flex justify-center items-center flex-col gap-5"
        id="contract"
      >
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
                  <FiLinkedin />
                </a>
              </li>
              <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl[">
                <a href="https://www.facebook.com/prokash.pul">
                  <FiFacebook />
                </a>
              </li>
              <li className="w-14 h-14 shadow-inner hover:shadow-2xl border-rose-500 border text-rose-500 hover:bg-rose-500 hover:text-white hover:border-white duration-300 rounded-xl flex items-center justify-center text-3xl[">
                <a href="https://www.instagram.com/prokash_pul/">
                  <FiInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:shadow-2xl shadow-md p-5 md:p-10 rounded-2xl">
          <h2 className="text-center font-bold text-2xl my-5">Contact </h2>
          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
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
    </>
  );
};

export default Contract;
