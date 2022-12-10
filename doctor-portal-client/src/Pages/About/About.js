import React from "react";
import about from "../../Assets/images/about.svg";

const About = () => {
  return (
    <div className="flex justify-center items-center bg-base-200 py-10">
      <img className="w-1/2" src={about} alt="" />
    </div>
  );
};

export default About;
