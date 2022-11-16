import React from "react";
import Hero from "./../Hero/Hero";
import CardsInfos from "./../CardInfos/CardsInfos";
import Services from './../Services/Services';
import DentalCare from './../DentalCare/DentalCare';
import MakeAppointment from './../MakeAppointment/MakeAppointment';

const Home = () => {
  return (
    <div className="bg-base-200">
        <Hero></Hero>
        <CardsInfos></CardsInfos>
        <Services></Services>
        <DentalCare></DentalCare>
        <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
