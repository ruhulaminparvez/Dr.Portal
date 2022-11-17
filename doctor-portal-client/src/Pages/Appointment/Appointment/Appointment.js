import BannerAppointment from "./../BannerAppointment/BannerAppointment";
import AvailableBooking from "./../AvailableBooking/AvailableBooking";
import React, { useState } from "react";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <BannerAppointment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></BannerAppointment>
      <AvailableBooking
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AvailableBooking>
    </div>
  );
};

export default Appointment;
