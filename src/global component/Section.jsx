import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Section = () => {
    useEffect(() => {
        Aos.init({
           duration: 2000 
        })
    },[])
  return (
    <div className="col-xxl-12 col-md-12 text-center mt-3" style={{width:"100vw"}} data-aos='fade-up'>
    <h1 className="fw-semibold"  style={
                    {fontSize: "40px",
                      fontFamily: "'teko', sans-serif",}
                  }>
      Empowering Digital Success
      <br /> through Software Solutions
    </h1>
    <p>
      Empowering digital success through our robust and adaptable software
      solutions, we enable businesses to meet their current needs while
      unlocking endless possibilities for tomorrow. With our expertise and
      forward-thinking approach, we provide businesses with the tools and
      technologies they need to thrive in the digital realm. Our tailored
      software solutions are designed to drive growth, enhance efficiency,
      and deliver exceptional results, ensuring long-term success in
      today's dynamic business landscape.
    </p>
  </div>
  )
}

export default Section