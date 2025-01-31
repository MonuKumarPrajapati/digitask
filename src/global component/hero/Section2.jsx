import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    Aos.init(
      {
        duration:1000,
      }
    );
  }, []);
  return (
    <>
      <div className="container mx-auto row align-items-center d-flex justify-content-between align-items-center mt-3">
        <div className="col-md-6 col-12 text-center text-md-start ps-md-3" data-aos="fade-up">
          <p
            
            className="heading-text text-center mb-3 fw-bold "
            style={{
              fontSize: "40px",
              fontFamily: "'Teko', sans-serif",
            }}
          >
            ABOUT OUR{" "}
            <span
              className="fw-bold"
              style={{
                color: "#ff530e",
                fontSize: "40px",
                fontFamily: "'Teko', sans-serif",
              }}
            >
              COMPANY
            </span>
          </p>
          <p>
            With a strong focus on delivering high-quality web solutions,
            Precious Infosystem has established itself as a trusted partner for
            businesses looking to set up a strong online presence. With a team
            of skilled professionals and a commitment to excellence, we offer a
            broad range of web development services tailored to meet the unique
            requirements of our clients.
          </p>
          <img
            
            className="img-fluid"
            alt="Mission and Values"
            src="https://preciousinfosystem.com/assets/theme1/mission-value-b4308037762b385800366800c223a69a9c3b11dbfd9c1ce80116b9a3362b2075.png"
          />
        </div>

        <div className="col-md-6 col-12 text-center text-md-end mt-4 mt-md-0" data-aos='fade-left'>
          <img
            className="img-fluid about-img"
            alt="About Us"
            src="https://preciousinfosystem.com/assets/theme1/modifyimg/ABOUT%20US-1302fb469de94390eff76472dec800535b63a61888f42dc57bac70d982d87f01.png"
          />
        </div>
      </div>
    </>
  );
};

export default Section2;
