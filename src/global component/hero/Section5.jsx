import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    title: "Web Development",
    description:
      "We have a squad of SEO developers who will ensure your website is SEO optimized, mobile-friendly, and designed to convert visitors into customers.",
    image:
      "https://preciousinfosystem.com/assets/theme1/precious/Service%20page/digital%20marketing%20(serice%20page)-599a3c0810a30429f1df07b659e00645362b2e25c63da82bb93d6050f59d1790.svg",
    link: "/service_detail/web-development",
  },
  {
    title: "App Development",
    description:
      "Beautiful and leading websites & apps that are mobile-friendly, fast to load, and help drive sales by providing a solid online presence.",
    image:
      "https://preciousinfosystem.com/assets/theme1/precious/Service%20page/graphic%20(serice%20page)-7def63801245c5e4d5ff83c261f3487558c58fe4e8d691bce6746ffc3a25867b.svg",
    link: "/service_detail/app-development",
  },
  {
    title: "UI/UX Design",
    description:
      "We create user-friendly web and mobile app designs that enhance user experience and engage audiences effectively.",
    image:
      "https://preciousinfosystem.com/assets/theme1/precious/Service%20page/app%20development(services)-cedd25c565ea187c574408264b2ce711c90fafa604b8001b6ba691806ba2a541.svg",
    link: "/service_detail/ui-ux-design",
  },
  {
    title: "Digital Marketing",
    description:
      "Our team of digital marketers ensures your website ranks well on Google, driving more organic traffic and generating results.",
    image:
      "https://preciousinfosystem.com/assets/theme1/precious/Service%20page/app%20development(services)-cedd25c565ea187c574408264b2ce711c90fafa604b8001b6ba691806ba2a541.svg",
    link: "/service_detail/digital-marketing",
  },
];

const Section5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      {/* Section Heading */}
      <h2 className="text-center fw-bold" style={
                    {fontSize: "40px",
                      fontFamily: "'teko', sans-serif",}
                  }>
        OUR <span className="text-danger">SERVICES</span>
      </h2>
      <p className="text-center mx-auto fw-semibold " style={{ maxWidth: "750px", fontSize: "14px", lineHeight: "1.4" }}>
        Traditional teaching methods have undergone a sea of change with desktops, tablets, and apps replacing blackboards. It is essential to have a strong online presence. Our web design, e-learning development, and tech solutions help achieve digital excellence.
      </p>

      {/* Service Cards */}
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 mb-4" data-aos="fade-up">
            <div className="card shadow-sm border-0 rounded p-3 h-100">
              <div className="d-flex align-items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid me-3"
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="mb-2 text-muted">{service.description}</p>
                  <a href={service.link} className="text-decoration-none text-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
