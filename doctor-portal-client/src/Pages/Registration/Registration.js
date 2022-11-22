import React from "react";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
      <div className="hero min-h-screen py-10 bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl font-bold">Registration now!</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
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
                  type="text"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Registration</button>
              </div>
              <div>
                <label className="label text-center">
                  <p className="label-text-alt">Already have an account? &nbsp;
                  <Link to="/login" className="label-text-alt link link-hover text-primary">
                    Goto Login
                  </Link></p>
                </label>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <button className="btn btn-outline btn-primary">Login with Google</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
  );
};

export default Registration;
