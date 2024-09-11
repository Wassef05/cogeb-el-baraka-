import React, { useState } from "react";
import "./Navbar.css";

 //
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

import image4 from '../../Assets/al baraka 1.png'
// import image from "../../Assets/cogeb.png";

const Navbar = () => {
  //function to show navbar
  const [menu, setMenu] = useState("menu");
  const shownavbar = () => {
    setMenu("showNavbar menu");
  };

  //function to remove navbar
  const removenavbar = () => {
    setMenu("menu");
  };

  //function to add a background to the navbar on scroll
  const [transparent, setTransparent] = useState("Navbar");
  const addBG = () => {
    if (window.scrollY >= 10) {
      setTransparent("Navbar addBackground");
     
    } else {
      setTransparent("Navbar");
    }
  };
  window.addEventListener("scroll", addBG);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGroup = () => {
    const groupElement = document.getElementById("group");
    if (groupElement) {
      groupElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const aboutUsElement = document.getElementById("about");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHero = () => {
    const aboutUsElement = document.getElementById("hero");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={transparent}>
      <div className="logoDiv">
        {/* <SiTreehouse className="icon" /> */}
        <img src={image4} className="logonav"/>
        {/* <span>Cogeb</span> */}
      </div>

      <div className={menu}>
        <ul>
          <li className="navList" onClick={scrollToHero}>Acceuil</li>
          {/* <li className="navList">Services</li> */}
          <li className="navList" onClick={scrollToGroup}>Catégorie</li>
          <li className="navList" onClick={scrollToAboutUs}>À Propos</li>
        </ul>
        {/* icon close navbar on small devices */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removenavbar} />
      </div>
     
      <button className="btnn" style={{
                color: 'rgb(255,181,1)', // Text color
                background:"rgb(205 198 198 / 36%)",
                // Button background color
                // border: '2px solid #C9961A' ,
                border:'2px solid rgb(236,172,16)',
                fontFamily: "'Playfair Display', serif",// Border color
              }}
              onClick={scrollToContact}>
                Contact
              </button>

      {/* icon open/show navbar on small devices */}
      <PiDotsNineBold className="icon menuIcon" onClick={shownavbar} />
    </div>
  );
};

export default Navbar;
