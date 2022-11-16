import React from "react";

const CardInfo = ({ info }) => {
  const { title, description, img, background } = info;
  console.log(info);
  return (
    <div className={`card card-side ${background} shadow-xl p-4 text-white`}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
