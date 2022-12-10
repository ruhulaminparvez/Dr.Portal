import React from "react";
import error from "../../Assets/images/error.svg";

const Error = () => {
  return (
    <div className="flex justify-center items-center bg-base-200">
      <img className="w-1/2" src={error} alt="" />
    </div>
  );
};

export default Error;
