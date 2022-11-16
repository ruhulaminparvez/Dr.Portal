import React from "react";
import clock from "../../../Assets/icons/clock.svg";
import marker from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";
import CardInfo from "./CardInfo";

const CardsInfos = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Opening Hours 9:00 AM - 10:00 PM",
      img: clock,
      background: "bg-primary",
    },
    {
      id: 2,
      title: "Visit Our Location",
      description: "Brooklyn, NY 10036, United States",
      img: marker,
      background: "bg-primary",
    },
    {
      id: 3,
      title: "Contact Us Now",
      description: "+15697854124",
      img: phone,
      background: "bg-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:px-52 my-6">
      {cardInfo.map((info) => (
        <CardInfo key={info.id} info={info}></CardInfo>
      ))}
    </div>
  );
};

export default CardsInfos;
