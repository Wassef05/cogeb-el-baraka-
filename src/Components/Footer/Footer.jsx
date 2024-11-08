import React, { useEffect, useState } from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

import Aos from "aos";
import "aos/dist/aos.css";
import image2 from "../../Assets/al baraka 1.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    bgcolor: "#122023",
    color: "rgb(201, 150, 26)",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    zIndex: 1300
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/21698751725";
  };

  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=100067771234549&mibextid=ZbWKwL";
  };

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/cogeb_immobiliere?igsh=MW9ub3kzbmE1ZXRoNw==";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+21698751724";
  };

  return (
    <div className="Footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" className="logoDiv">
          <div className="footerLogo">
            <img src={image2} className="logonavfooter" alt="Logo" />
          </div>
          <p>{t("footer.visionText")}</p>
          <div className="socials flex">
            <ImFacebook className="icon" onClick={handleFacebookClick} />
            <RiWhatsappFill className="icon" onClick={handleWhatsAppClick} />
            <AiFillInstagram className="icon" onClick={handleInstagramClick} />
          </div>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">{t("footer.information")}</span>
          <li>
            <a href="#hero">{t("navbar.home")}</a>
          </li>
          <li>
            <a href="#contact">{t("navbar.contact")}</a>
          </li>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">{t("footer.usefulLinks")}</span>
          <li>
            <a onClick={() => handleOpenModal(t("modals.devis"))}>{t("footer.devis")}</a>
          </li>
          <li>
            <a onClick={() => handleOpenModal(t("modals.support"))}>{t("footer.support")}</a>
          </li>
          <li>
            <a onClick={() => handleOpenModal(t("modals.confidentiality"))}>{t("footer.confidentiality")}</a>
          </li>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">{t("footer.contactDetails")}</span>
          <span className="phone">+216 73 225 471</span>
          <span className="email">Contact@groupecogeb.com</span>
          <span className="website">www.SLS.com</span>
        </div>
      </div>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <p style={{ color: "white", fontSize: "0.9rem" }}>
            {modalContent}
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;
