import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider';



const Registration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
    .then((userCredential) => { 
      const user = userCredential.user;
      console.log(user);
      if(user){
       alert("Registration Successful");
      }
     })
    .catch((error) => { 
      console.log(error);
     });
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
                  {...register("name", { required: "**Name is Required" })}
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && <p className="text-red-700 mt-2">{errors.name?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", 
                  { 
                    required: "**Email is Required", 
                    pattern: { value: /^\S+@\S+$/i, message: "**Invalid Email" } 
                  }
                  )}
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && <p className="text-red-700 mt-2">{errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", 
                  { 
                    required: "**Password is Required",
                    minLength: { value: 6, message: "**Password must be at least 6 characters" },
                    maxLength: { value: 15, message: "**Password must be at most 15 characters" },
                    pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: "**Password must contain at least one letter and one number" }
                  }
                  )}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && <p className="text-red-700 mt-2">{errors.password?.message}</p>}
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
                <button className="btn btn-outline btn-primary">Continue with Google</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
  );
};

export default Registration;
