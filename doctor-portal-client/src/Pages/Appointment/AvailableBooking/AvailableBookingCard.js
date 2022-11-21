import React from "react";

const AvailableBookingCard = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <p className="text-center">{ slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p className="text-center">{slots.length} {slots.length > 1 ? "Slots" : "Slot"} Available</p>
        <div className="card-actions justify-center">
          <label onClick={() => setTreatment(appointment)} disabled={slots.length === 0} htmlFor="appointment-modal" className="btn btn-primary">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AvailableBookingCard;
