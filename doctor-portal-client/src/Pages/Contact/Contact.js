import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="mb-6">
        <h1 className="text-5xl text-center font-bold text-gray-700">
          Contact Us
        </h1>
      </div>
      <div className="hero">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Enter your subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Enter your message"
                className="textarea textarea-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
