import React,{useEffect}  from "react";
import "./whyCogeb.css";



import video3 from '../../Assets/baraka.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'
 

const WhyCogeb = () => {

  useEffect (()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <section className="about section">
      <div className="secContainer">
     

        {/* <div className="mainContent container grid">
          <div data-aos="fade-right" className="singleItem">
            <img src={img} alt="Image Name" />
            <h3> 100+ Places </h3>

            <p>
              Reserch show that a chance to break away from the normal rythms of
              daily life reduces stress and improves health and well-being
            </p>
          </div>

          <div data-aos="fade-right" className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3> 1000+ Mountains </h3>

            <p>
            Escaping daily routines for mountains reduces stress, improves well-being, and boosts health, as research suggests.
            </p>
          </div>

          <div data-aos="fade-right" className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3> 2000+ Clients </h3>

            <p>
            We are proud to serve over 1000 clients who choose to travel with us, trusting us with their unforgettable experiences
            </p>
          </div>
        </div> */}
        <div className="container">
        <div  data-aos="fade-right" className="videoCard ">
            <div className="cardContent grid">
            <div className="cardText">
                <h2>Opérations de Pressage des Olives</h2>
                <p style={{ color: 'azure' ,  textShadow: '2px 2px 4px white'}}>
                    Le pressage des olives consiste à sélectionner les meilleures olives, à les nettoyer, puis à les broyer pour en extraire l'huile. Cette méthode garantit une huile d'olive de haute qualité, conservant ses saveurs naturelles et ses bienfaits nutritionnels.
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
