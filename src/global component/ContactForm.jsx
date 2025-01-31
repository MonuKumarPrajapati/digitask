import React, { useEffect } from "react";
import "./ContactForm.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import formImg from "./image/form2.png";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({
      duration:2000,
    })
  },[])
  return (
    <>
      <div className="container mt-5" data-aos='fade-up'>
        <h2 className="contact-heading">Get in Touch with Us.</h2>
        <p className="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non
          dui at turpis suscipit placerat. Suspendisse quis aliquet dolor.
          Vivamus viverra augue ut libero volutpat tincidunt. Integer
          consectetur odio sed libero iaculis, sit amet aliquet felis viverra.
        </p>
      </div>
      <div className="container mt-5 d-flex">
        <div className="row  ">
          {/* Left side */}
          <div className="col-md-6">
            <div data-aos='fade-right'>
              <img
                src="https://preciousinfosystem.com/assets/theme1/website%20design/precious/Hire%20Us/form2-4f476e5b5166d5435c838e5ffd41d7ac610e7c5dbfe7b359c7025d5f4a357e99.png"
                alt="Sample"
                className="contact-image"
              />
            </div>
          </div>
        </div>
        {/* Right side */}
        {/* form */}
        <div className="col-md-6 " data-aos='fade-left'>
          <form>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
              />
            </div>

            {/* Company & Country */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Give us a message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>

            {/* Blur Paragraph */}
            <p className="blur-text">
              Please fill out the form to the best of your ability. We will get
              back to you as soon as possible. Thank you for your patience.
            </p>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
