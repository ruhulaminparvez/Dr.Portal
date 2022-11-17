import React from "react";
import appointment from "../../../Assets/images/appointment.png";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="mt-16" style={{ background: `url(${appointment})` }}>
      <div className="flex flex-col justify-center items-center py-16">
        <h4 className="text-lg text-cyan-400 pb-2">Contact Us</h4>
        <h1 className="text-5xl font-bold text-white mb-10">Stay connected with us!</h1>
        
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
                <div className="form-control mt-4 flex mx-auto">
                    <Link>
                        <button className="btn btn-primary">Submit</button>
                    </Link>
                </div>
            </div>
        </div>        
      </div>
    </section>
  );
};

export default ContactUs;
