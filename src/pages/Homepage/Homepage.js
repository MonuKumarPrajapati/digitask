import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";

import Aos from "aos";
import "aos/dist/aos.css";
import Section from "../../global component/Section";
import Technologies from "../../global component/Technologies";
import ContactForm from "../../global component/ContactForm";
import HeroSection from "../../global component/hero/HeroSection";
import Section2 from "../../global component/hero/Section2";
import Testimonials from "../../global component/Testimonials";
import Section3 from "../../global component/hero/Section3";
import Section4 from "../../global component/hero/Section4";
import Section5 from "../../global component/hero/Section5";

SwiperCore.use([Pagination, Autoplay]);
const Homepage = () => {
  return (
    <>
      {/* Main Content */}
      <HeroSection />

      
      {/* 5 section */}
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />


      <Technologies />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Homepage;
