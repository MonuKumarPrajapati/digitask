import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './Technologies.css'

const Technologies = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      {/* old */}
<div className="technology-section" data-aos="fade-up">
<div className="container-fluid">
  <h1 className="technology">Technologies We Work With</h1>
  <div className="grid-container">
   

    <div className="rotating-container">
      <div className="rotating-image">
        <img
          src="https://preciousinfosystem.com/assets/theme1/nodejs-dad61bda8e08e0abde54713550c73c419be6189a739c3b5cd7014db122f2bf47.png"
          alt="CSS"
        />
      </div>
      <h2 className="heading5">NODEJS</h2>
    </div>
  </div>
</div>
<div className="container-fluid ">
  <div className="grid-container">
    <div className="rotating-container">
      <div className="rotating-image">
        <img
          src="https://preciousinfosystem.com/assets/theme1/php-93ac93e195e4a5849cc72db786d23b241a579a350d37d65915f8862078c816b9.png"
          alt="PHP"
        />
      </div>
      <h2 className="heading5">PHP</h2>
    </div>
    <div className="rotating-container">
      <div className="rotating-image">
        <img
          src="https://preciousinfosystem.com/assets/theme1/reactjs-6e2d75d2ffb4da91c40ab411261f1f43c8f7058113812027fc0899fe6db7b7b0.png"
          alt="React Js"
        />
      </div>
      <h2 className="heading5">React Js</h2>
    </div>
    <div className="rotating-container">
      <div className="rotating-image">
        <img
          src="https://preciousinfosystem.com/assets/theme1/python-fc85d6c46ae7d141cb53fd41b64fa9f0af5e19ba36f490e5f6e900a901169147.png"
          alt="HTML"
        />
      </div>
      <h2 className="heading5">PYTHON</h2>
    </div>
    <div className="rotating-container">
      <div className="rotating-image">
        <img
          src="https://preciousinfosystem.com/assets/theme1/java-95b7f9d760ac744070be73397887213bd72dd0b2ca2e3d01c50dcdb39ff72323.png"
          alt="JAVA"
        />
      </div>
      <h2 className="heading5">JAVA</h2>
    </div>

    <div className="rotating-container">
      <div className="rotating-image">
        <img
          src="https://preciousinfosystem.com/assets/theme1/ror-526624e399585fe45b2971a7a4430b9faf10be60abba733d76dcece5c1a53ee8.png"
          alt="ROR"
        />
      </div>
      <h2 className="heading5">ROR</h2>
    </div>
  </div>
</div>

{/* Industries web server */}


</div>
     </>
  );
};

export default Technologies;
