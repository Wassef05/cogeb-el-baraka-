import React, { useEffect } from "react";
import "./Listing.css";
import { FaOilCan, FaTree, FaLeaf, FaWineBottle } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";
import image4 from "../../Assets/zit.jpg"
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
