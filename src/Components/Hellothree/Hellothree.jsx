import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import du hook useTranslation
import "./NewHello.css";
import { med } from "../../Assets";
import Aos from "aos";
import "aos/dist/aos.css";

const NewHelloThree = () => {
  const { t } = useTranslation(); // Initialisation du hook pour traduire

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="new-hellothree" id="hero">
      <div className="new-sec-container-three containerHR">
        <div className="new-img-div" data-aos="fade-up">
          <img src={med} alt="albaraka logo" className="new-image-style" />
        </div>
        <div className="new-text-div" data-aos="fade-up">
          <p style={{ color: 'white' }}>
            <span style={{ fontWeight: 'bold', color: '#FFD700' }}>
              {t("newHelloText.title")}
            </span>:<br />
            {t("newHelloText.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewHelloThree;
