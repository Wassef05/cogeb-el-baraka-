import React, { useState,useEffect } from "react";
import "./Hello.css";

import { HiLocationMarker } from "react-icons/hi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "../../Assets/Hello Image.png";
import Image2 from '../../Assets/tayma11.png'
import Image3 from '../../Assets/Helo1.png'
import ImageHero from '../../Assets/HELLO2.png'
import ImageHero2 from '../../Assets/per.png'
import ImageHero3 from '../../Assets/choisir2.png'
import Image4 from '../../Assets/tayma33.png'

import Aos from "aos";
import "aos/dist/aos.css";

const styles = {
  container: {
    // backgroundColor: '#2E836B',
    backgroundColor:'#122023',
    height:'240px',
    color: 'white',
    padding: '30px',
    borderRadius: '15px',
    position: 'relative',
    marginTop: '50px',
  
  },
  mainTitle: {
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontFamily: "'Playfair Display', serif"
  
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '3px solid rgb(201, 150, 26)', // gold color
    paddingTop: '20px',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Playfair Display', serif"
  },
  statValue: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: "'Playfair Display', serif"
  },
  statLabel: {
    fontSize: '19px',
    marginTop: '5px',
    fontFamily: "'Playfair Display', serif"
  },
};

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 1000 / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{Math.round(count)}</span>;
};

const HelloTwo = () => {

  const [text] = useTypewriter({
    words: ["Votre projet, notre passion – ensemble, construisons du grandiose." , "Qualité, variété et conseils d'experts pour chaque étape de votre réalisation ","Des outils fiables pour des créations sans limite – la quincaillerie de toutes vos ambitions."],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 1,
    delaySpeed: 2000,
  });

  // useEffect(() => {
  //   Aos.init({ duration: 2000 });

  //   const timer = setTimeout(() => {
  //     const sponsorsElement = document.getElementById("sponsor"); 
  //     if (sponsorsElement) {
  //       sponsorsElement.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, 6000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="HelloTwo">
      <div className="secContainerTwo containerHRR flex">
        <div className="textDiv">
          <h1 data-aos="fade-up"> <span style={{ fontFamily: "'Playfair Display', serif",fontSize:"4.5rem"}}>Pourquoi Choisir Nous ?</span>
         </h1>
          <span data-aos="fade-up" className="design"></span>
          {/* <p data-aos="fade-up">
            Trouvez facilement une variété de produits qui vous conviennent, oubliez toutes les difficultés pour trouver ce qui vous correspond.
          </p> */}
          <p data-aos="fade-up" style={{ fontFamily: "'Playfair Display', serif",fontSize:"1.5rem"}}>
          Cogeb groupe: façonnez votre espace de rêve, où innovation et élégance se rencontrent pour transcender l'ordinaire.
          </p>

          {/* <div data-aos="fade-up" className="searchBar flex">
            <div className="inputBox flex">
              <HiLocationMarker className="icon" />
              <input type="text" placeholder="Par emplacement" />
            </div>
           
          </div> */}

                <div data-aos="fade-up" className="statisticsBar" style={styles.container}>
                      <div style={styles.mainTitle}>Découvrez</div>
                      <div style={styles.mainTitle}>Notre histoire.</div>
                      <div style={styles.statsContainer}>
                        <div style={styles.statItem}>
                          <div style={styles.statValue}>40 ANS +</div>
                          <div style={styles.statLabel}>Expérience</div>
                        </div>
                        <div style={styles.statItem}>
                          <div style={styles.statValue}>1980</div>
                          <div style={styles.statLabel}>Depuis</div>
                        </div>
                        <div style={styles.statItem}>
                          <div style={styles.statValue}>900 +</div>
                          <div style={styles.statLabel}>Clients</div>
                        </div>
                        <div style={styles.statItem}>
                          <div style={styles.statValue}>900 +</div>
                          <div style={styles.statLabel}>Produit</div>
                        </div>
                        <div style={styles.statItem}>
                          <div style={styles.statValue}>200 +</div>
                          <div style={styles.statLabel}>Projet</div>
                        </div>
                      </div>
                    </div>

          {/* <div data-aos="fade-up" className="numbers flex">
            <div className="singleNumber">
              <span>
              <AnimatedCounter end={9} duration={2.5} /> <blockquote>K+</blockquote>
              </span>
              <small>Produits Premium</small>
            </div>

            <div className="singleNumber">
              <span>
              <AnimatedCounter end={200} duration={2.5} /> <blockquote>+</blockquote>
              </span>
              <small>Clients Heureux</small>
            </div>

            <div className="singleNumber">
              <span>
              <AnimatedCounter end={1000} duration={2.5} /> <blockquote>+</blockquote>
              </span>
              <small>Batiments Remportés</small>
            </div>
          </div> */}
        </div>
        <div data-aos="fade-up" className="imgDiv">
          <img src={ImageHero} alt="Image Accueil" style={{height:'600px',border:'10%'}} />
        </div>
      </div>
    </div>
  );
};

export default HelloTwo;
