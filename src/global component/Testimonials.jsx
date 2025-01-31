import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="subscribe-area" style={{ marginTop: "-48px" }}>
      <Container className="text-center my-5">
        <div
          className="sc-title"
          style={{ fontSize: "40px", fontFamily: "'teko', sans-serif" }}
        >
          Testimonials
        </div>
        <div data-aos="fade-down">
         
          <h2 className="mt-4 fw-semibold"  style={
                    {fontSize: "40px",
                      fontFamily: "'teko', sans-serif",}
                  }>
            Word from <span className="desigin fw-bold"  style={
                    {fontSize: "40px",
                      fontFamily: "'teko', sans-serif",}
                  } >Client</span>
          </h2>
        </div>

        {/* Swiper for Cards */}
        <div className="swiper-container-flex" data-aos="zoom-in">
          <Swiper
            spaceBetween={20}
            slidesPerView={3} // Show 3 cards at once
            slidesPerGroup={1} // Scroll one card at a time
            autoplay={{ delay: 3000 }} // Autoplay with 3-second delay
            loop={true} // Loop slides
            className="mySwiper"
            direction="horizontal" // Only horizontal swipe
            pagination={{ clickable: true }} // Enable clickable pagination
          >
            {/* Swiper Slides */}
            <SwiperSlide>
              <div className="card testimonial-card" data-aos="fade-up">
                <img
                  src="https://preciousinfosystem.com/assets/theme1/testimonial3-55140f1d894fb8b3d22979601940a7a58f09b0b81b571a3936c9fc49a667e398.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="client"
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam imperdiet.
                  </p>
                  <h5 className="card-title mt-2">John Doe</h5>
                  <p className="card-text text-muted">CEO, Company A</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card testimonial-card" data-aos="fade-up">
                <img
                  src="https://preciousinfosystem.com/assets/theme1/testimonial3-55140f1d894fb8b3d22979601940a7a58f09b0b81b571a3936c9fc49a667e398.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="client"
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam facilisis.
                  </p>
                  <h5 className="card-title mt-2">Jane Smith</h5>
                  <p className="card-text text-muted">CTO, Company B</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card testimonial-card" data-aos="fade-up">
                <img
                  src="https://preciousinfosystem.com/assets/theme1/testimonial3-55140f1d894fb8b3d22979601940a7a58f09b0b81b571a3936c9fc49a667e398.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="client"
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h5 className="card-title mt-2">Michael Johnson</h5>
                  <p className="card-text text-muted">Manager, Company C</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card testimonial-card" data-aos="fade-up">
                <img
                  src="https://preciousinfosystem.com/assets/theme1/testimonial3-55140f1d894fb8b3d22979601940a7a58f09b0b81b571a3936c9fc49a667e398.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="client"
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer lacinia.
                  </p>
                  <h5 className="card-title mt-2">Sara Williams</h5>
                  <p className="card-text text-muted">Founder, Company D</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Additional slides */}
            <SwiperSlide>
              <div className="card testimonial-card" data-aos="fade-up">
                <img
                  src="https://preciousinfosystem.com/assets/theme1/testimonial3-55140f1d894fb8b3d22979601940a7a58f09b0b81b571a3936c9fc49a667e398.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="client"
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h5 className="card-title mt-2">Alice Brown</h5>
                  <p className="card-text text-muted">Developer, Company E</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Pagination outside the cards */}
          <div className="swiper-pagination"></div>
        </div>
      </Container>

      {/* contact from */}
    </div>
  );
};

export default Testimonials;
