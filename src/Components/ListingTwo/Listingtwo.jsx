import React, { useEffect } from "react";
import "./Listing.css";



import image1 from "../../Assets/icon111.png"






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
