import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
      
      <div style={{
        background:`url(${appointment})`
      }}
      
      className="hero min-h-screen bg-base-200 justify-center ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h3 className="text-5xl font-bold text-success">Contact Us</h3>
          <h2 className=" text-xl py-6 text-white">Stay Contact With Us</h2>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-96 ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input type="text" placeholder="subject" className="input input-bordered" />
             
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <input type="text" placeholder="message" className="input input-bordered" />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success uppercase font-bold">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
       
    );
};

export default ContactUs;