import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use React Router for navigation
import backgroundImage from '../assets/background.jpg'; // Update the background image path if needed
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
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
    container: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: windowWidth < 768 ? '80px' : '120px',
    },
    burgerButton: {
      position: 'absolute',
      top: '75px',
      right: '20px',
      fontSize: windowWidth < 768 ? '24px' : '36px',
      cursor: 'pointer',
      zIndex: '10', // Ensure it stays above other content
    },
    hepta: {
      position: 'absolute',
      top: '80px',
      left: '20px',
      fontSize: windowWidth < 768 ? '28px' : '40px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      cursor: 'pointer',
    },
    heading: {
      fontSize: '100px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    paragraph: {
      fontSize: windowWidth < 768 ? '18px' : '24px',
      textAlign: 'center',
      margin: '20px 0',
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
      zIndex: '100', // Ensure it appears above all content
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
    <div style={styles.container}>

      {/* Burger button */}
      <div style={styles.burgerButton} onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Hepta logo text */}
      <div style={styles.hepta}>
        <h1>Hepta</h1>
      </div>

      {/* Main Content */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={styles.heading}>Gallery</h1>
        <p style={styles.paragraph}>A free template by Colorlib. Download and share!</p>
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
          <Link to="/contact" style={styles.link} onClick={toggleMenu}>Contact</Link>
          <Link to="/hotels" style={styles.link} onClick={toggleMenu}>Hotel</Link>
        </div>
      )}

    </div>
  );
};

export default Gallery;
