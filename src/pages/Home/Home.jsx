import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";

const Home = () => {
  return (
    <div className="lg:w-[1080px] w-[92%] mx-auto md:mt-16 mt-3 mb-16">
      <Banner></Banner>
      <hr />
      <Features></Features>
    </div>
  );
};

export default Home;
