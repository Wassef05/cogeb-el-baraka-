import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importer useTranslation
import "./Subscribe.css";
import FormDialog from "./FormDialog";
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { t } = useTranslation(); // Initialiser le hook useTranslation

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleContactClick = () => {
    window.location.href = 'https://www.instagram.com/cogeb_immobiliere?igsh=amdkdGloNG11bWt4';
  };

  return (
    <div className="Subscribe section container">
      <div className="secContent">
        <h1 data-aos="fade-up">{t("subscribe.title")}</h1> {/* Utilisation de la traduction pour le titre */}
        <p data-aos="fade-up">
          {t("subscribe.description")} {/* Utilisation de la traduction pour la description */}
        </p>
        <button
          data-aos="fade-up"
          className="btn"
          style={{
            color: '#C9961A', // Couleur du texte
            backgroundColor: '#cdc8c8', // Couleur d'arrière-plan du bouton
            border: '2px solid #C9961A'
          }}
          onClick={openModal}
        >
          {t("subscribe.button")} {/* Utilisation de la traduction pour le texte du bouton */}
        </button>
      </div>
      <FormDialog open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Subscribe;
