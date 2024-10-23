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
    <section className="about section" id="about">
      <div className="secContainer">
     

      
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
