import React from "react";

const Footer = () => {
  return (
    <div className="overflow-hidden relative mt-20">
      <div className="flex justify-center -mb-16 md:-mb-28 z-40">
        <div className="flex flex-col gap-3 justify-center items-center">
          <img
            src="https://simgbb.com/avatar/cK0cy33dYQGL.jpg"
            alt=""
            width="35"
            height="35"
            className="rounded-full border-2  border-rose-500"
          />
          <p className="flex items-center gap-2">
            © 2022. All rights reserved by
            <a className="text-rose-500 text-2xl font-bold" href="/#home">
              {" "}
              Pro<span className="text-black">kash</span>
            </a>
          </p>
        </div>
      </div>
      <svg
        className="w-full h-48 -z-50  bottom-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320"
      >
        <path
          fill="#f43f5e"
          fillOpacity="1"
          d="M0,32L30,58.7C60,85,120,139,180,133.3C240,128,300,64,360,80C420,96,480,192,540,240C600,288,660,288,720,261.3C780,235,840,181,900,149.3C960,117,1020,107,1080,96C1140,85,1200,75,1260,101.3C1320,128,1380,192,1410,224L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Footer;
