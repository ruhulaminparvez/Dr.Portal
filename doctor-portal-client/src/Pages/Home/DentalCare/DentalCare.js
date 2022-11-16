import React from "react";
import treatment from "../../../Assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:px-52">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="px-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
