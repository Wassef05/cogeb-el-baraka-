import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importation du hook de traduction
import "./Hello.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Hello = () => {
  const { t } = useTranslation(); // Initialisation du hook pour traduire
  
  // Utilisation du texte traduit à partir de la clé "helloText"
  const [text] = useTypewriter({
    words: [t("helloText")], // Utilisation de la traduction ici
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
    <div className="Hello" id="hero">
      <div className="secContainer containerHR flex">
        <div className="textDiv">
          <h1 data-aos="fade-up">
            <span className="baraka" style={{ fontFamily: "Deutschlands" }}>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="orange" />
          </h1>
          <span data-aos="fade-up" className="design"></span>
        </div>
        <div data-aos="fade-up" className="imgDiv"> </div>
      </div>
    </div>
  );
};

export default Hello;
