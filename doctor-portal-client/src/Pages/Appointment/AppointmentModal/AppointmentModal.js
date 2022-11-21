import React from "react";
import { format } from "date-fns";

const AppointmentModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
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
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Selected Date</span>
              </label>
              <input className="input input-bordered" value={date} disabled />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Slot</span>
              </label>
                <select name="slot" className="select select-ghost input-bordered w-full">
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
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input type="button" className="btn btn-primary mt-6" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
