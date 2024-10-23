import React, { useEffect } from "react";
import "./Sponsors.css";




 //
import Aos from "aos";
import "aos/dist/aos.css";

const Sponsors = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Sponsors" id="sponsor">
            <div data-aos="fade-up" className="sponsor-title" style={{ textAlign: 'center' }}>
     

        <h2 style={{ color:'#c9c2c2', fontSize: '1.1rem',marginBottom:'3rem',letterSpacing: '0.4em' , fontFamily: "'Playfair Display', serif",}}>Nos Partenaires de Confiance</h2>
      </div>

      <div data-aos="fade-up" className="secContainer flex">
      <div className="logo-slider">

        <span>
          <img src={logo1} alt="Logo Image" />
        </span>
        <span>
          <img src={logo2} alt="Logo Image" />
        </span>
        <span>
          <img src={logo3} alt="Logo Image" />
        </span>
        <span>
          <img src={logo4} alt="Logo Image" />
        </span>
        <span><img src={logo1} alt="Logo 1" /></span>
          <span><img src={logo2} alt="Logo 2" /></span>
          <span><img src={logo3} alt="Logo 3" /></span>
          <span><img src={logo4} alt="Logo 4" /></span>
      </div>
      </div>
    </div>
  );
};

export default Sponsors;
