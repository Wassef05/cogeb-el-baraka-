import React, { useEffect } from "react";
import "./Contact.css";

//
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidVideo } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { TbDeviceLandlinePhone } from "react-icons/tb";
//

import contactimg from '../../Assets/contactbaraka.png'
import image from "../../Assets/Contact Image.png";

import image2 from "../../Assets/Helo3.png"
//
import Aos from "aos";
import "aos/dist/aos.css";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 35.574385221373845, // Make sure these coordinates are for the location you want
  lng: 10.73509862446424,
};

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleContactClick = () => {
    window.location.href = 'https://www.facebook.com/cogebimmobiliere.com.tn/?locale=fr_FR';
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
    <div className="Contact container section" id="contact">
      <div className="secContainer flex">
      <div className="card">
        <img src={contactimg}/>
          {/* <h2 className="card-title">Où nous trouver ?</h2>
          <p className="card-subtitle">SQZ toujours à votre service</p>
          <div className="map-container">
          <LoadScript googleMapsApiKey="AIzaSyAhOie6_knV7vthuc3QG2xOLa5RtN3ztuc">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15} 
        >
          <Marker position={center} />

                        </GoogleMap>
                                    </LoadScript>
          </div> */}
        </div>


        <div className="textDiv">
          <div data-aos="fade-down" className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText" style={{color:'rgb(201, 150, 26)' , fontFamily:"'Playfair Display', serif",fontSize:'2rem'}}>Contactez-Nous</span>
              <h1 style={{fontFamily:"'Playfair Display', serif",fontSize:'2rem'}}>
                Un moyen facile de nous contacter{" "}
                <span className="orangeDot">.</span>
              </h1>
              <p>
                Vous avez des difficultés à trouver la propriété de vos rêves
                pour votre domicile ? Vous avez besoin d'un guide pour acheter
                vos produits ? Contactez-nous simplement !
              </p>
            </div>
          </div>
          <div className="secContent grid" data-aos="fade-right">
            <div data-aos="fade-up" className="phone">
              <div className="info flex">
                <TbDeviceLandlinePhone className="icon" />
                <span>
                  <p style={{ fontSize: '1rem' }}>+216 73 225 471</p>
                </span>
              </div>
            </div>
            <div data-aos="fade-up" className="chat"  onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }} >
              <div className="info flex">
                <RiWhatsappFill className="icon" />
                <span>
                  <p style={{ fontSize: '1rem' }}>+216 98 751 725</p>
                </span>
              </div>
            </div>
            <div data-aos="fade-up" className="videoCall" onClick={handleFacebookClick} style={{ cursor: 'pointer' }}>
              <div className="info flex">
                <FaFacebook className="icon" />
                <span>
                  <p style={{ fontSize: '1rem' }}> 24/7 Support</p>
                </span>
              </div>
            </div>

            <div data-aos="fade-up" className="message" onClick={handlePhoneClick} style={{ cursor: 'pointer' }} >
              <div className="info flex">
                <BiSolidPhoneCall  className="icon"  />
                <span>
                  <p style={{ fontSize: '1rem' }}>+216 98 751 724</p>
                </span>
              </div>
            </div>
         
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
