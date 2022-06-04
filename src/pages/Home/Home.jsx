import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <div className="lg:w-[1080px] w-[92%] mx-auto md:my-16 mt-10 mb-24">
      <Banner></Banner>
      <hr />
      <Features></Features>
      <hr />
      <Portfolio></Portfolio>
      <hr />
      <Skills></Skills>
    </div>
  );
};

export default Home;
