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

import { FaOilCan, FaTree, FaLeaf, FaWineBottle } from 'react-icons/fa';
// import image1 from "../../Assets/House (1).png";
// import image1 from "../../Assets/doc2/IMGCOGEB1.jpg"
import image1 from "../../Assets/bat25.jpg"
// import image2 from "../../Assets/House (4).png";
// import image2 from "../../Assets/doc3/IMG2.jpg";
import image2 from "../../Assets/doc2/mok.jpg";
// import image3 from "../../Assets/House (5).png";
import image3 from "../../Assets/doc3/IMG3.jpg";
// import image4 from "../../Assets/House (2).png";
import image4 from "../../Assets/zit.jpg";
// import image5 from "../../Assets/House (1).jpg";
import image5 from "../../Assets/bat25.jpg";
import image6 from "../../Assets/House (2).jpg";

import image7 from "../../Assets/import.jpg"

// import image11 from '../../Assets/sqz/peinture.jpg'
// import image22 from '../../Assets/sqz/electrique.jpg'
// import image33 from '../../Assets/sqz/porte.jpg'
// import image44 from '../../Assets/sqz/jardin.jpg'
// import image55 from '../../Assets/sqz/fixation.jpg'
// import image66 from '../../Assets/sqz/construction.jpg'
// import image77 from '../../Assets/sqz/polembrie.jpg'
// import image88 from '../../Assets/sqz/manuel.jpg'
// import image99 from '../../Assets/sqz/securite.jpg'


import image11 from '../../Assets/cat1.png'
import image22 from '../../Assets/cat2.png'
import image33 from '../../Assets/cat3.png'
import image44 from '../../Assets/cat9.png'
import image55 from '../../Assets/cat4.png'
import image66 from '../../Assets/cat5.png'
import image77 from '../../Assets/cat6.png'
import image88 from '../../Assets/cat7.png'
import image99 from '../../Assets/cat8.png'


import image111 from '../../Assets/liste1.jpg'
import image222 from '../../Assets/liste2.jpg'
import image333 from '../../Assets/liste3.jpg'
import image444 from '../../Assets/liste4.jpg'
import image555 from '../../Assets/liste5.jpg'
import image666 from '../../Assets/liste6.jpg'
import { AiOutlineSwapRight } from 'react-icons/ai';

import Aos from "aos";
import "aos/dist/aos.css";

const properties = [
  {
    id: 1,
    image: image4,
    name: "Cogeb",
    price: "24/24",
    desc: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  ",
    beds: 6,
  },
  {
    id: 2,
    image: image4,
    name: "Cogeb",
    price: "24/24",
    desc: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    beds: 4,
  },
  {
    id: 3,
    image: image4,
    name: "Cogeb ",
    price: "24/24",
    desc: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    beds: 5,
  },
  // {
  //   id: 4,
  //   image: image4,
  //   name: "Cogeb one , Tunisia",
  //   price: "24/24",
  //   desc: "A company specializing in the sale of sanitary products",
  //   beds: 7,
  // },
  // {
  //   id: 5,
  //   image: image4,
  //   name: "Cogeb one , Tunisia",
  //   price: "24/24",
  //   desc: "A company specializing in the sale of sanitary products",
  //   beds: 8,
  // },
  // {
  //   id: 6,
  //   image: image4,
  //   name: "Historic Brownstone, Boston",
  //   price: "24/24",
  //   desc: "A company specializing in the sale of sanitary products",
  //   beds: 6,
  // },
];



const Listing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Listing container section" id="group">
      <div className="secContainer">
        <div className="secHeader">
         
          <h1 data-aos="fade-up"  style={{
    color: '#C9961A', 
    fontSize: '2rem', 
    marginBottom: '2rem', 
    letterSpacing: '0.3em', 
    fontFamily: "'Playfair Display', serif", 
    fontWeight: '500', 
    textTransform: 'uppercase', 
  }}>EXPLOREZ NOS PRODUITS</h1>
          <h1 data-aos="fade-up" className="title" style={{letterSpacing: '0.2em',}}>
          Engagez-vous vers l'Excellence avec COGEB
            <span className="orangeDot"> .</span>
          </h1>
          <p data-aos="fade-up" style={{fontFamily: "'Playfair Display', serif",marginBottom:'3rem',fontSize:'1.2rem'}}>
            Satisfaire nos clients , Dépassez vos frontières .
          </p>
          <div data-aos="fade-up" className="btns flex">
        
              {/* <button className="btnn" style={{
                color: '#C9961A', // Text color
                backgroundColor: 'white', // Button background color
                border: '2px solid #C9961A',
                fontFamily: "'Playfair Display', serif",
                marginBottom:'3rem'// Border color
              }}>
                Choisir vos désirs
              </button> */}


          </div>
        </div>

     <div className="secContent grid">
          {/* Use Map array method */}
          {properties.map(({ id, image, name, price, desc, beds }) => {
            return (
              <div key={id} className="singleListing">
                <div data-aos="fade-down" className="imgDiv">
                  <img src={image} alt="House Image" />
                </div>
                <div data-aos="fade-up" className="info">
                  <h2 className="name">{name}</h2>
                  {/* <span className="price">
                    <span className="digits">{price}</span>
                    <span className="orangeText"> h</span>
                    <span className="duration"> / 7 Days</span>
                  </span> */}
                  <p>{desc}</p>
                  <div className="ammenities flex">
  <span className="flex">
    <FaOilCan className="icon" /> {/* Représente l'huile d'olive */}
  </span>

  <span className="flex">
    <FaTree className="icon" /> {/* Représente l'olivier */}
  </span>

  <span className="flex">
    <FaLeaf className="icon" /> {/* Représente la feuille d'olive */}
  </span>

  <span className="flex">
    <FaWineBottle className="icon" /> {/* Représente la bouteille d'olive */}
  </span>
</div>
                </div>
              </div>
            );
          })}
          {/* <div className="singleListing">
            <div className="imgDiv">
              <img src={image} alt="House Image" />
            </div>
            <div className="info">
              <h2 className="name">Countryside Estate, Italy</h2>
              <span className="price">
                <span className="digits">34,223</span>
                <span className="orangeText">USD</span>
                <span className="duration">/Day</span>
              </span>
              <p>
                A historic chateau in the Bordeaux wine region, featuring
                vineyards.,
              </p>
              <div className="ammenities flex">
                <span className="flex">
                  <FaBed className="icon" />
                  <blockquote>x5</blockquote>
                </span>

                <span className="flex">
                  <MdPool className="icon" />
                </span>

                <span className="flex">
                  <AiOutlineWifi className="icon" />
                </span>

                <span className="flex">
                  <MdFastfood className="icon" />
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Listing;
