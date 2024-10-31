import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for burger and close buttons
import { Link } from 'react-router-dom'; // Use React Router for navigation
import backgroundImage from '../assets/background.jpg'; // Updated image path
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Home = () => {
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
    travelToursContent: {
      textAlign: 'center',
      marginTop: windowWidth < 768 ? '20px' : '40px',
    },
    heading: {
      fontSize: '100px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    paragraph: {
      fontSize: windowWidth < 768 ? '18px' : '24px',
      margin: '20px 0',
    },
    button: {
      padding: '12px 28px',
      fontSize: '22px',
      backgroundColor: '#87CEEB',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      cursor: 'pointer',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
      zIndex: 1000, // Ensure it covers the entire screen
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayLink: {
      margin: '20px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '24px',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '36px',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.homeContainer}>
      {/* Burger button */}
      <div style={styles.burgerButton} onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Hepta logo text */}
      <div style={styles.hepta}>
        <h1>Hepta</h1>
      </div>

      {/* Main Content */}
      <div style={styles.travelToursContent}>
        <h1 style={styles.heading}>Travel & Tours</h1>
        <p style={styles.paragraph}>A free template by Colorlib. Download and share!</p>
        <button style={styles.button}>Visit Colorlib</button>
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div style={styles.overlay}>
          <FaTimes style={styles.closeButton} onClick={toggleMenu} />
          <Link to="/" style={styles.overlayLink} onClick={toggleMenu}>Home</Link>
          <Link to="/about-us" style={styles.overlayLink} onClick={toggleMenu}>About Us</Link>
          <Link to="/news" style={styles.overlayLink} onClick={toggleMenu}>News</Link>
          <Link to="/contact" style={styles.overlayLink} onClick={toggleMenu}>Contact</Link>
          <Link to="/hotels" style={styles.overlayLink} onClick={toggleMenu}>Hotel</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
