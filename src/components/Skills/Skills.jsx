import React from "react";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <div id="skills">
      <div className="flex justify-center items-center flex-col gap-5">
        <small className="text-rose-500 md:mt-10 mt-10 tracking-widest">
          Features
        </small>
        <h2 className="text-3xl md:text-5xl font-bold my-2 ">
          Professional Skills
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 md:justify-center my-10 ">
        <div className="my-5 md:border-r-2">
          <small className="text-rose-500 md:mt-20 mt-10 tracking-widest">
            Features
          </small>
          <div className="text-2xl md:text-3xl font-bold my-2">
            Development Skill
          </div>
          <div className="m-5 ml-0">
            <ProgressBar name="HTML5" done="95" />
            <ProgressBar name="CSS3" done="90" />
            <ProgressBar name="TailwindCSS" done="85" />
            <ProgressBar name="React" done="80" />
            <ProgressBar name="JavaScript" done="70" />
            <ProgressBar name="Node.Js" done="60" />
          </div>
        </div>
        <div className="my-5">
          <small className="text-rose-500 md:mt-20 mt-10 tracking-widest">
            Features
          </small>
          <div className="text-2xl md:text-3xl font-bold my-2 ">
            Other Skill
          </div>
          <div className="m-5 ml-0">
            <ProgressBar name="Firebase" done="60" />
            <ProgressBar name="MongoDb" done="55" />
            <ProgressBar name="React Native" done="50" />
            <ProgressBar name="Figma" done="55" />
            <ProgressBar name="Next.Js" done="40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
