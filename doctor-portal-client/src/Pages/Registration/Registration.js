import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" data-theme="corporate">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl font-bold">Registration</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label text-center mt-2">
                  <p className="label-text-alt">Goto the &nbsp; 
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover">Login
                  </Link></p>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Registration</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
