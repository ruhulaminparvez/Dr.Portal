import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvailableBookingCard from "./AvailableBookingCard";

const AvailableBooking = ({ selectedDate }) => {
  const [availableAppointment, setAvailableAppointment] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAvailableAppointment(data));
  }, []);

  return (
    <div className="lg:px-52 bg-base-200">
      <p
        className="text-center py-10 text-xl font-bold"
        style={{ color: "#057AFF" }}
      >
        Your Picked Date: {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {availableAppointment.map((appointment) => (
          <AvailableBookingCard
            key={appointment._id}
            appointment={appointment}
          ></AvailableBookingCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableBooking;
