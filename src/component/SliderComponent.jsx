import React from 'react';
import Slider from 'react-slick'; // Ensure this is imported correctly
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/img1.jpg'; // Update with your actual image paths
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/background.jpg';
import image5 from '../assets/img1.jpg';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" style={styles.image} />
        </div>
        <div>
          <img src={image2} alt="Slide 2" style={styles.image} />
        </div>
        <div>
          <img src={image3} alt="Slide 3" style={styles.image} />
        </div>
        <div>
          <img src={image4} alt="Slide 4" style={styles.image} />
        </div>
        <div>
          <img src={image5} alt="Slide 5" style={styles.image} />
        </div>
        
      </Slider>
    </div>
  );
};

export default SliderComponent;
