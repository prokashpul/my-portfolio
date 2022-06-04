import React, { useState } from "react";

const ProgressBar = ({ done, name }) => {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 1000);

  return (
    <>
      <div className="my-5">
        <small className="text-rose-500 md:mt-20 mt-10 tracking-widest">
          {name}
        </small>
        <div className="w-full bg-gray-300 rounded-full">
          <div
            className="bg-rose-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full opacity-0 duration-1000 w-0"
            style={style}
          >
            {done}%
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
