import React, { useEffect } from "react";
import "./Sponsors.css";


import logo1 from '../../Assets/Logo1.png'
import logo2 from '../../Assets/Logo1.png'
import logo3 from '../../Assets/Logo1.png'
import logo4 from '../../Assets/Logo1.png'

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
        {/* <h2 style={{ color: '#C9961A', fontSize: '1.5rem',marginBottom:'3rem',letterSpacing: '0.5em' }}>Nos Partenaires de Confiance</h2> */}

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
