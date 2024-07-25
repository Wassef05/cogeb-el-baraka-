import React, { useState, useEffect } from "react";
import "./Hello.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Hello = () => {
  const [text] = useTypewriter({
    words: ["El-Baraka : De notre trésor local , Nous offrons le meilleur"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 1,
    delaySpeed: 2000,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const timer = setTimeout(() => {
      const sponsorsElement = document.getElementById("sponsor");
      if (sponsorsElement) {
        sponsorsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Hello" id='hero'>
      <div className="secContainer containerHR flex">
        <div className="textDiv">
          <h1 data-aos="fade-up">
            <span className="baraka" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "4rem" }}>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="orange" />
          </h1>
          <span data-aos="fade-up" className="design"></span>
        </div>
        <div data-aos="fade-up" className="imgDiv"></div>
      </div>
    </div>
  );
};

export default Hello;
