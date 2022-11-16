import React from "react";
import doctor from "../../../Assets/images/doctor.png";
import appointment from "../../../Assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section className="mt-20 mb-12"
    style={{background: `url(${appointment})`}}
    >
      <div className="hero lg:px-52">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="-mt-40 -mb-5 hidden lg:block lg:w-1/2" alt="" />
          <div>
            <h4 className="text-lg text-cyan-400 pb-2">Appointment</h4>
            <h1 className="text-5xl font-bold text-white">Make an appointment Today!</h1>
            <p className="py-4 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
