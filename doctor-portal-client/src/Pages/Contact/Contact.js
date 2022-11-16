import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" data-theme="corporate">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl font-bold">Contact Us</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
