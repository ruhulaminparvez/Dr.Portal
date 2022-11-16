import React from "react";

const ServiceCard = ({ cardData }) => {
  const { title, description, img } = cardData;
  return (
    <div className="card w-75 bg-base-100 shadow-xl flex justify-center items-center p-6">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
