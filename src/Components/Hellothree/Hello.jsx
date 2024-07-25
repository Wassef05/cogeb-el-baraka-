import React, { useEffect } from "react";
import "./NewHello.css";
import med from "../../Assets/Group 42.png";
import Aos from "aos";
import "aos/dist/aos.css";

const NewHelloThree = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="new-hellothree" id="hero">
      <div className="new-sec-container-three containerHR">
        <div className="new-img-div" data-aos="fade-up">
          <img src={med} alt="medlazreg" className="new-image-style" />
        </div>
        <div className="new-text-div" data-aos="fade-up">
         
          <p style={{ color: 'white' }}>
           
            <span style={{ fontWeight: 'bold', color: '#FFD700'}}> Huilerie El Baraka</span>:<br/>
            Fondée sur un profond respect pour la nature, se consacre à une agriculture biologique innovante, abandonnant pesticides et engrais chimiques pour préserver la santé humaine et restaurer les saveurs authentiques des aliments. Récemment intégrée au commerce international, Huilerie El Baraka s'est spécialisée dans l'exportation d'huile d'olive biologique "Extra Vierge", tirant parti de la richesse oléicole de la Tunisie, leader mondial en exportation d'huile d'olive biologique. L'huile d'olive, pilier du régime méditerranéen, est reconnue pour ses bienfaits contre les maladies cardiovasculaires et le cholestérol, à condition que sa pureté et sa composition biologique soient rigoureusement maintenues
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default NewHelloThree;
