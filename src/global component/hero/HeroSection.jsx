import React, { useEffect, useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://preciousinfosystem.com/assets/theme1/modifyimg/Banner%20icon4-cfe48501a6b469015719c046e0c4cb1ed45dbe3d5b79e7c6c1ddffd357b5c43b.png",
    "https://preciousinfosystem.com/assets/theme1/modifyimg/Banner%20icon3-aea978c0634e86472bf7184302fa44d70560036d10e5b41eebb2b13754f5fde1.png",
    "https://preciousinfosystem.com/assets/theme1/modifyimg/Banner%20icon2-60040f0afc581b12886d0c737c1028d2c7b0014ca2b9cfbdbbd6f854bb782a01.png",
  ];

  useEffect(() => {
    AOS.init()
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <ParallaxProvider>
      <div className="hero-section">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container text-center w-100">
              <div className="row d-flex justify-content-between w-100">
                <div className="col text-white fw-bold fs-4 ">
                  <p className="header-content" style={{marginTop:'25%'}} data-aos="fade-up">
                    Custom Software Development Company
                  </p>
                  <p className="header-content-bold mt-3" style={
                    {fontSize: "40px",
                      fontFamily: "'teko', sans-serif",}
                  } >
                    Empower your business with {" "}
                    <span
                      style={{
                        color: "#ff530e",
                        fontSize: "40px",
                        fontFamily: "'teko', sans-serif",
                      }}
                    >
                      custom software solutions {" "}
                    </span>
                    for all your digital needs.
                  </p>
                </div>

                {/* Parallax Image with zoom effect */}
                <div className="col">
                  <Parallax y={[-30, 30]} tagOuter="figure">
                    <img
                      style={{marginTop:'25%'}}
                      src={images[currentIndex]}
                      className="hero-img bouncy"
                      alt={`Slide ${currentIndex + 1}`}
                      data-aos="zoom-in"
                    />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default HeroSection;
