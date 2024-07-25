import React, { useEffect } from "react";
import "./Listing.css";

import { FaBed } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { GiBedLamp } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { GiOlive } from "react-icons/gi";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiSpiralBottle } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi"
import { GiWoodenPier } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa6";
import { FaSink } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi"
import { GiKitchenTap } from "react-icons/gi";
import { BiSolidBath } from "react-icons/bi";
// import image1 from "../../Assets/House (1).png";
// import image1 from "../../Assets/doc2/IMGCOGEB1.jpg"
import image1 from "../../Assets/icon111.png"
// import image2 from "../../Assets/House (4).png";
// import image2 from "../../Assets/doc3/IMG2.jpg";
import image2 from "../../Assets/icon222.png";
// import image3 from "../../Assets/House (5).png";
import image3 from "../../Assets/icon333.png";

// import image4 from "../../Assets/House (2).png";
import image4 from "../../Assets/zit.jpg";
// import image5 from "../../Assets/House (1).jpg";
import image5 from "../../Assets/bat25.jpg";
import image6 from "../../Assets/House (2).jpg";

import image7 from "../../Assets/import.jpg"

import Aos from "aos";
import "aos/dist/aos.css";

const properties = [
  {
    id: 1,
    image: image1,
    name: "Service 1",
    price: "24/24",
    desc: "Les services phares du groupe Cogeb sont reconnus pour leur excellence et leur engagement à fournir des solutions personnalisées et innovantes",

  },
  {
    id: 2,
    image: image1,
    name: "Service 2",
    price: "24/24",
    desc: "Les services phares du groupe Cogeb sont reconnus pour leur excellence et leur engagement à fournir des solutions personnalisées et innovantes",
       
  },
  {
    id: 3,
    image: image1,
    name: "Service 3",
    price: "24/24",
    desc: "Les services phares du groupe Cogeb sont reconnus pour leur excellence et leur engagement à fournir des solutions personnalisées et innovantes",

  }

];

const ListingTwo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="ListingHR container section" id="group">
      <div className="secContainer">
        <div className="secHeader">
          {/* <span data-aos="fade-up" className="orangeText">
            Nos Sites
          </span>
          <h1 data-aos="fade-up" className="title">
          Engagez-vous vers l'Excellence avec le Groupe COGEB
            <span className="orangeDot"> .</span>
          </h1>
          <p data-aos="fade-up">
            Satisfaire nos clients , Dépassez vos frontières .
          </p>
          <div data-aos="fade-up" className="btns flex">
            <button className="btn active">Groupe Exclusif</button>
          </div> */}

<h1 data-aos="fade-up"  style={{
    color: '#C9961A', 
    fontSize: '2rem', 
    marginBottom: '2rem', 
    letterSpacing: '0.3em', 
    fontFamily: "'Playfair Display', serif", 
    fontWeight: '500', 
    textTransform: 'uppercase', 
  }}>EXPLOREZ NOS SERVICES</h1>
        </div>

        <div className="secContentHR grid">
          {properties.map(({ id, image, name, desc }) => {
            return (
              <div key={id} className="singleListingHR">
                <div data-aos="fade-down" className="imgDiv">
                  <img src={image} alt="Image de la maison" />
                </div>
                <div data-aos="fade-up" className="info">
                  <h2 className="name">{name}</h2>
                 
                  <p>{desc}</p>
               
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingTwo;
