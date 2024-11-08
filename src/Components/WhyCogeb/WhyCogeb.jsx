import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import du hook useTranslation
import "./whyCogeb.css";
import video3 from '../../Assets/baraka.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhyCogeb = () => {
  const { t } = useTranslation(); // Initialisation du hook pour traduire

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section" id="about">
      <div className="secContainer">
        <div className="container">
          <div data-aos="fade-right" className="videoCard">
            <div className="cardContent grid">
              <div className="cardText">
                <h2>{t("whyCogebText.title")}</h2> {/* Titre traduit */}
                <p style={{ color: 'azure', textShadow: '2px 2px 4px white' }}>
                  {t("whyCogebText.description")} {/* Description traduite */}
                </p>
              </div>

              <div className="cardVideo">
                <video src={video3} autoPlay loop muted type="video/mp4"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCogeb;
