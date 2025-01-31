import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
SwiperCore.use([Pagination, Autoplay]);
const Section3 = () => {
     const [count, setCount] = useState({
        projectsdelivered: 0,
        clientretention: 0,
        happyclients: 0,
        years: 0,
      });
    
      useEffect(() => {
        Aos.init({
          duration: 2000,
        });
        const incrementCounters = () => {
          setCount((prev) => ({
            // increment by
            projectsdelivered:
              prev.projectsdelivered < 500 ? prev.projectsdelivered + 70 : 500,
            // increment by 5
            clientretention:
              prev.clientretention < 90 ? prev.clientretention + 10 : 90,
            // increment by 30
            happyclients: prev.happyclients < 300 ? prev.happyclients + 30 : 300,
            // increment by 1
            years: prev.years < 9 ? prev.years + 1 : 9,
          }));
        };
    
        // Start interval to increment the counters every 100ms
        const interval = setInterval(incrementCounters, 100);
    
        // Stop interval after 1 second (1000ms)
        const timeout = setTimeout(() => {
          clearInterval(interval);
        }, 1000);
    
        // Cleanup when the component unmounts
        return () => {
          clearInterval(interval);
          clearTimeout(timeout);
        };
      }, []);
  return (
    <div className="container-fluid counters-container" data-aos="fade-up">
        <div className="row justify-content-center align-items-center">
          {/* Counter 1 */}
          <div className="col-md-3 counter" style={{ maxWidth: "1240" }}>
            <div className="counter-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s"
                alt="Calculation"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.projectsdelivered}+</h2>
              <p className='fw-semibold'>Projects Delivered</p>
            </div>
          </div>

          {/* Counter 2 */}
          <div className="col-md-3 counter" style={{ maxWidth: "1240" }}>
            <div className="counter-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s"
                alt="Percentage"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.clientretention}%</h2>
              <p className='fw-semibold'>Enterprise Client Retention</p>
            </div>
          </div>

          {/* Counter 3 */}
          <div className="col-md-3 counter" style={{ maxWidth: "1240" }}>
            <div className="counter-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s"
                alt="Projects"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.happyclients}+</h2>
              <p className='fw-semibold'>Happy Clients</p>
            </div>
          </div>

          {/* Counter 4 */}
          <div className="col-md-3 counter" style={{ maxWidth: "1240%" }}>
            <div className="counter-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s"
                alt="Years"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.years}+</h2>
              <p className='fw-semibold'>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Section3