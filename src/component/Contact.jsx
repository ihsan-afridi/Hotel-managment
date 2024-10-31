import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Updated image path
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const styles = {
    homeContainer: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: windowWidth < 768 ? '80px' : '120px',
    },
    burgerButton: {
      position: 'absolute',
      top: '75px',
      right: '20px',
      fontSize: windowWidth < 768 ? '24px' : '36px',
      cursor: 'pointer',
      zIndex: 10, // Ensures it stays above other content
    },
    hepta: {
      position: 'absolute',
      top: '80px',
      left: '20px',
      fontSize: windowWidth < 768 ? '28px' : '40px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    travelToursContent: {
      textAlign: 'center',
      marginTop: windowWidth < 768 ? '20px' : '40px',
      transition: 'color 0.3s ease',
    },
    heading: {
      fontSize: '100px',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    paragraph: {
      fontSize: windowWidth < 768 ? '18px' : '24px',
      margin: '20px 0',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    hoverText: {
      color: '#87CEEB', // Sky blue for text hover
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      zIndex: 100, // Ensures it appears above all content
    },
    link: {
      fontSize: '36px',
      margin: '15px 0',
      textDecoration: 'none',
      color: 'white',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '36px',
      cursor: 'pointer',
    },
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-start" style={styles.homeContainer}>

      {/* Burger button */}
      <div style={styles.burgerButton} onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Hepta text with hover and italic */}
      <div
        style={styles.hepta}
        onMouseOver={(e) => (e.currentTarget.style.color = styles.hoverText.color)}
        onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
      >
        <h1>Hepta</h1>
      </div>

      {/* Main Content */}
      <div className="row w-100 d-flex justify-content-center align-items-start">
        <div className="heading mb-4 aos-init aos-animate" style={styles.travelToursContent}>
          <h1
            style={styles.heading}
            onMouseOver={(e) => (e.currentTarget.style.color = styles.hoverText.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
          >
            Contact
          </h1>
          <p
            style={styles.paragraph}
            onMouseOver={(e) => (e.currentTarget.style.color = styles.hoverText.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
          >
            Get in touch with us for any queries or support.
          </p>
        </div>
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div style={styles.overlay}>
          <div style={styles.closeButton} onClick={toggleMenu}>
            <FaTimes />
          </div>
          <Link to="/" style={styles.link} onClick={toggleMenu}>Home</Link>
          <Link to="/about-us" style={styles.link} onClick={toggleMenu}>About Us</Link>
          <Link to="/news" style={styles.link} onClick={toggleMenu}>News</Link>
          <Link to="/gallery" style={styles.link} onClick={toggleMenu}>Gallery</Link>
          <Link to="/hotels" style={styles.link} onClick={toggleMenu}>Hotel</Link>
        </div>
      )}

    </div>
  );
};

export default Contact;
