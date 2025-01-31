import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="subscribe-area py-5">
      <Container className="text-center">
        <div
          className="sc-title"
          style={{ fontSize: "40px", fontFamily: "'Teko', sans-serif" }}
        >
          Testimonials
        </div>
        <div data-aos="fade-down">
          <h2
            className="mt-4 fw-semibold"
            style={{ fontSize: "40px", fontFamily: "'Teko', sans-serif" }}
          >
            Word from{" "}
            <span
              className="desigin fw-bold"
              style={{ fontSize: "40px", fontFamily: "'Teko', sans-serif" }}
            >
              Clients
            </span>
          </h2>
        </div>

        {/* Swiper for Cards */}
        <div className="swiper-container-flex mt-4" data-aos="zoom-in">
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // Default for small screens
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            slidesPerGroup={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* Swiper Slides */}
            {[
              { name: "John Doe", role: "CEO, Company A" },
              { name: "Jane Smith", role: "CTO, Company B" },
              { name: "Michael Johnson", role: "Manager, Company C" },
              { name: "Sara Williams", role: "Founder, Company D" },
              { name: "Alice Brown", role: "Developer, Company E" },
            ].map((client, index) => (
              <SwiperSlide key={index}>
                <div className="card testimonial-card shadow-sm p-3" data-aos="fade-up">
                  <img
                    src="https://preciousinfosystem.com/assets/theme1/testimonial3-55140f1d894fb8b3d22979601940a7a58f09b0b81b571a3936c9fc49a667e398.jpg"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt={client.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam imperdiet.
                    </p>
                    <h5 className="card-title mt-2">{client.name}</h5>
                    <p className="card-text text-muted">{client.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
