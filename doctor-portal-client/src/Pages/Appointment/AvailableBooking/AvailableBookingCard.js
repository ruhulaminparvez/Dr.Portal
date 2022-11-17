import React from "react";

const AvailableBookingCard = ({ appointment }) => {
  const { name, slots } = appointment;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <p className="text-center">{slots[0]}</p>
        <p className="text-center">{slots.length} Slots Available</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableBookingCard;
