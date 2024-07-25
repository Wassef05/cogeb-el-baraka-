import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../Assets/slide1.jpg';
import image2 from '../../Assets/slide2.jpg';
import image3 from '../../Assets/slide3.jpg';
import image4 from '../../Assets/slide4.jpg';
import image5 from '../../Assets/slide5.jpg'

const images = [image1, image2, image3, image4,image5];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: '80px', // Vous pourriez avoir besoin d'ajuster cette valeur
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '100%' , paddingTop:'5rem' ,paddingBottom:'10rem'}}>

<div className="carousel-titles" style={{ textAlign: 'center', marginBottom: '5rem', marginTop:"5rem" }}>
        <h2 style={{
    color: '#C9961A', 
    fontSize: '2rem', 
    marginBottom: '2rem', 
    letterSpacing: '0.3em', 
    fontFamily: "'Playfair Display', serif", 
    fontWeight: '500', 
    textTransform: 'uppercase', 
  }}>EXPLOREZ NOS PROJETS</h2>
        <p style={{ fontSize: '1.9rem',color:"rgb(30, 63, 113)",fontFamily: "'Playfair Display', serif",marginBottom:'3rem'}}>Jetez un œil à nos projets récents</p>
      </div>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} style={{ padding: '0 15px' }}> {/* Ajustez le padding ici pour plus d'espacement */}
            <img src={img} alt={`Slide ${idx}`} style={{
              width: '90%', 
              height: '520px', 
              borderRadius: '30px', // Utilisez une valeur en px pour un meilleur contrôle
              boxSizing: 'border-box'
            }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
