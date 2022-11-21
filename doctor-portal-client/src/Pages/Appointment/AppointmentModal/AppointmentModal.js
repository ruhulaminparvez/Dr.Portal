import React, { useState } from "react";
import { format } from "date-fns";

const AppointmentModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const [appointmentForm, setAppointmentForm] = useState({});

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(appointmentForm);

    e.target.reset();
  };

  const onBlurHandle = (e) => {
    const newAppointmentForm = { ...appointmentForm };
    newAppointmentForm[e.target.name] = e.target.value;
    setAppointmentForm(newAppointmentForm);
  };

  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-bold">{name}</h3>
          <form onSubmit={onSubmitHandle}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Selected Date</span>
              </label>
              <input  onBlur={onBlurHandle} className="input input-bordered" name="date" value={date} disabled />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Slot</span>
              </label>
                <select  onBlur={onBlurHandle} name="slot" className="select select-ghost input-bordered w-full" required>
                  <option selected>
                    Pick the best time for you from available { slots && slots.length} slots
                  </option>
                  {
                    slots && slots.map(slot => <option value={slot}>{slot}</option>)
                  }
                </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                onBlur={onBlurHandle}
                type="text"
                name="name" 
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                onBlur={onBlurHandle}
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                onBlur={onBlurHandle}
                type="text"
                name="email" 
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input type="submit" className="btn btn-primary mt-6" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
