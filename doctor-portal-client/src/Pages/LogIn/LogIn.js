import React from "react";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";

const LogIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
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
                <label className="label text-center">
                  <Link to="/forget-password" className="label-text-alt link link-hover">
                  <p className="label-text-alt">Forgot Password?</p>
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <label className="label text-center">
                  <p className="label-text-alt">New to Doctor's Portal? &nbsp;
                  <Link to="/registration" className="label-text-alt link link-hover text-primary">
                    Create New Account
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
    </div>
  );
};

export default LogIn;
