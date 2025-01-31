import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-5 mt-5 goal-section position-relative">
      <h5 className="heading-text mb-3 text-center fw-bold " style={{fontSize:'40px', fontFamily: "'teko', sans-serif",}}>
        How we <span className="fw-bold " style={{color:'#ff530e'}}>Work</span>
      </h5>
      <p
        className="text-center my-4 mb-5 fw-semibold"
        style={{
          maxWidth: 850,
          margin: "auto",
          lineHeight: "1.4",
          fontSize: 14,
        }}
      >
        Precious Info System is a web design and internet marketing company with
        vast experience in positioning clients for success in website growth and
        online traffic.
      </p>

      <div className="row justify-content-center">
        {/** Card 1 */}
        <div
          className="col-sm-6 col-md-3 col-12 text-center p-3"
          data-aos="fade-up"
          data-aos-duration="1000"
          style={styles.card}
        >
          <div className="d-flex justify-content-center">
            <img style={styles.image} alt="Discovery" src="https://preciousinfosystem.com/assets/theme1/modifyimg/smalls%20icons/Identify%20the%20problem-c8ec676df3d9ee16b47f3185aa3c2345e3c6a2a5b737a109042a63572a3d7f1a.png" />
          </div>
          <p className="goal-heading fw-semibold">Discovery and Planning</p>
          <p className="goal-content">
            The procedure starts with a comprehensive project discovery stage,
            where client needs and objectives are recognized. A detailed project
            plan is created, outlining key features and timelines.
          </p>
        </div>

        {/** Card 2 */}
        <div
          className="col-sm-6 col-md-3 col-12 text-center p-3"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          style={styles.card}
        >
          <div className="d-flex justify-content-center">
            <img style={styles.image} alt="Strategy" src="https://preciousinfosystem.com/assets/theme1/modifyimg/smalls%20icons/Find%20a%20solution-b9fe67bd59b8e492ae79a91f5e5e5774df4b232a93099ebaf5772fa345fd4058.png" />
          </div>
          <p className="goal-heading fw-semibold">Strategy and Design</p>
          <p className="goal-content">
            Designers craft the website’s aesthetics, selecting colors, fonts,
            and images. Mockups and prototypes are created to visualize the final
            design.
          </p>
        </div>

        {/** Card 3 */}
        <div
          className="col-sm-6 col-md-3 col-12 text-center p-3"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          style={styles.card}
        >
          <div className="d-flex justify-content-center">
            <img style={styles.image} alt="Development" src="https://preciousinfosystem.com/assets/theme1/modifyimg/smalls%20icons/Code%20It-8fd6f4370d85856300ef303c3141b0cd423f66427a8cee7821294021a32ec32b.png" />
          </div>
          <p className="goal-heading fw-semibold">Development</p>
          <p className="goal-content">
            Developers write clean HTML, CSS, and JavaScript code to bring the
            design to life, ensuring responsiveness and cross-browser
            compatibility.
          </p>
        </div>

        {/** Card 4 */}
        <div
          className="col-sm-6 col-md-3 col-12 text-center p-3"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          style={styles.card}
        >
          <div className="d-flex justify-content-center">
            <img style={styles.image} alt="Testing" src="https://preciousinfosystem.com/assets/theme1/modifyimg/smalls%20icons/Test%20It-056c69f78cae9a1660b95cbdeef7ecf096ec7a8516cccc3c222584c5ac93d381.png" />
          </div>
          <p className="goal-heading fw-semibold">Testing</p>
          <p className="goal-content">
            Comprehensive testing is performed, including functional,
            performance, and security checks before deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  card: {
    backgroundColor: "transparent",
    border: "none",
    padding: "20px",
  },
  image: {
    height: "100px",
    width: "100px",
  },
};

export default Section4;
