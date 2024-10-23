

import React, { useEffect , useState } from "react";
import "./Footer.css";

import { SiTreehouse } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import {RiWhatsappFill} from "react-icons/ri"

import Aos from "aos";
import "aos/dist/aos.css";
// import image from "../../Assets/Plan2.png";
import image2 from '../../Assets/al baraka 1.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    bgcolor: '#122023',
    color: 'rgb(201, 150, 26)',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    zIndex: 1300,  
  };

  
  const scrollToHero = () => {
    const aboutUsElement = document.getElementById("hero");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGroup = () => {
    const groupElement = document.getElementById("group");
    if (groupElement) {
      groupElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const modalText = {
    "Confidentialité": "Nous prenons très au sérieux la sécurité de vos informations personnelles. Toutes les données que vous partagez avec nous sont traitées de manière confidentielle et sécurisée. Nous mettons en place des mesures de sécurité robustes pour protéger vos informations contre tout accès non autorisé, divulgation ou altération. Soyez assuré que vos données sont en de bonnes mains, et nous respectons strictement toutes les lois en matière de protection des données.",
    "Support": "Nous sommes là pour vous aider à faire les meilleurs choix de produits pour vos projets. Notre équipe d'experts est disponible pour vous fournir des conseils personnalisés, répondre à vos questions et vous guider dans vos décisions d'achat. Nous nous engageons à vous offrir le meilleur service possible pour assurer votre satisfaction complète.",
    "Devis": "Nos devis sont calculés sur mesure pour répondre précisément à vos besoins spécifiques. Nous prenons en compte chaque détail de votre demande pour vous fournir une estimation juste et fiable. Avec nous, soyez certain d'obtenir un devis transparent et compétitif, adapté à votre budget et à vos exigences."
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/21698751725'; 
  };

  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100067771234549&mibextid=ZbWKwL';
  };
  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/cogeb_immobiliere?igsh=MW9ub3kzbmE1ZXRoNw==';
  };
  
  const handlePhoneClick = () => {
    window.location.href = 'tel:+21698751724'; 
  };
  return (
    <div className="Footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" className="logoDiv">
          <div className="footerLogo">
            {/* <SiTreehouse className="icon" />
            <span>COGEB</span> */}
            <img src={image2} className="logonavfooter"/>
          </div>
          <p>Notre vision est de faire de votre choix le meiller .</p>
          <div className="socials flex">
            <ImFacebook className="icon" onClick={handleFacebookClick} />
            <RiWhatsappFill className="icon" onClick={handleWhatsAppClick} />
            <AiFillInstagram className="icon"  onClick={handleInstagramClick} />
          </div>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Informations</span>
          <li>
            <a href="">Accueil</a>
          </li>
         
          <li>
            <a href="#contact">Contacter</a>
          </li>
          {/* <li>
            <a href="#group">Groupe</a>
          </li> */}
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Liens Utiles</span>
          <li><a onClick={() => handleOpenModal(modalText["Devis"])}>Devis</a></li>
          <li><a onClick={() => handleOpenModal(modalText["Support"])}>Support</a></li>
          <li><a onClick={() => handleOpenModal(modalText["Confidentialité"])}>Confidentialité</a></li>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Détails de Contact</span>
          <span className="phone">+216 73 225 471</span>
          <span className="email">Contact@groupecogeb.com</span>
          <span className="website">www.SLS.com</span>
        </div>
      </div>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
       
          <p style={{ color: 'white', fontSize: "0.9rem" }}>
            {modalContent}
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;
