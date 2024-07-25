import React, { useEffect } from "react";
import "./Footer.css";

import { SiTreehouse } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
// import image from "../../Assets/Plan2.png";
import image2 from '../../Assets/al baraka 1.png'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" className="logoDiv">
          <div className="footerLogo">
            {/* <SiTreehouse className="icon" />
            <span>COGEB</span> */}
            <img src={image2} className="logonav"/>
          </div>
          <p>Notre vision est de faire de cet endroit le meilleur lieu de vie pour les gens !</p>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Informations</span>
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">Explorer</a>
          </li>
          <li>
            <a href="">Contacter</a>
          </li>
          <li>
            <a href="">Groupe</a>
          </li>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Liens Utiles</span>
          <li>
            <a href="">Livraison</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Lieux & Conditions</a>
          </li>
          <li>
            <a href="">Confidentialité</a>
          </li>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Détails de Contact</span>
          <span className="phone">+216 123 654 456</span>
          <span className="email">cojeb@cojeb.com</span>
          <span className="website">www.SLS.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
