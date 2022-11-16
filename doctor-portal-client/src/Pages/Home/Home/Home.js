import React from "react";
import Hero from "./../Hero/Hero";
import CardsInfos from "./../CardInfos/CardsInfos";

const Home = () => {
  return (
    <div className="bg-base-200">
      <Hero></Hero>
      <CardsInfos></CardsInfos>
    </div>
  );
};

export default Home;
