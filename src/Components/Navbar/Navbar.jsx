import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import image4 from '../../Assets/al baraka 1.png';
import frenchFlag from '../../Assets/images.jpg';  // Import de l'image du drapeau français
import englishFlag from '../../Assets/eng.jpg';    // Import de l'image du drapeau anglais
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState("menu");
  const [languageMenu, setLanguageMenu] = useState(false);

  const toggleLanguageMenu = () => setLanguageMenu(!languageMenu);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenu(false);
  };

  const shownavbar = () => setMenu("showNavbar menu");
  const removenavbar = () => setMenu("menu");

  const [transparent, setTransparent] = useState("Navbar");
  const addBG = () => {
    setTransparent(window.scrollY >= 10 ? "Navbar addBackground" : "Navbar");
  };
  window.addEventListener("scroll", addBG);

  return (
    <div className={transparent}>
      <div className="logoDiv">
        <img src={image4} className="logonav" alt="Logo" />
      </div>

      <div className={menu}>
        <ul>
          <li className="navList" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t("navbar.home")}</li>
          <li className="navList" onClick={() => window.scrollTo({ top: document.getElementById("about").offsetTop, behavior: 'smooth' })}>{t("navbar.about")}</li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removenavbar} />
      </div>

      <div className="rightSection">
        <button
          className="btnn"
          style={{
            color: 'rgb(255,181,1)',
            background: "rgb(205 198 198 / 36%)",
            border: '2px solid rgb(236,172,16)',
            fontFamily: "'Playfair Display', serif",
          }}
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          {t("navbar.contact")}
        </button>

        {/* Sélecteur de langue */}
        <div className="languageSelector">
          <FaGlobe className="icon" onClick={toggleLanguageMenu} />
          {languageMenu && (
            <div className="languageDropdown">
              <button onClick={() => changeLanguage("fr")}>
                <img src={frenchFlag} alt="French Flag" className="flagIcon" style={{ width: '20px', marginRight: '8px' }} />
                Fr
              </button>
              <button onClick={() => changeLanguage("en")}>
                <img src={englishFlag} alt="English Flag" className="flagIcon" style={{ width: '20px', marginRight: '8px' }} />
                En
              </button>
            </div>
          )}
        </div>
      </div>

      <PiDotsNineBold className="icon menuIcon" onClick={shownavbar} />
    </div>
  );
};

export default Navbar;
