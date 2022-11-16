import React from "react";
import bannerImg from "../../../Assets/images/chair.png";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between mt-5">
          <img
            src={bannerImg}
            alt="hero"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold lg:w-80">Your New Smile Starts Here</h1>
            <p className="py-3 lg:w-96">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
