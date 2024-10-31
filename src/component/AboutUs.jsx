import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import backgroundImage from '../assets/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      zIndex: 1000,
    },
    menuOverlay: {
      display: menuOpen ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      zIndex: 1000,
      transition: 'opacity 0.3s ease',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '28px',
      cursor: 'pointer',
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
    menuItem: {
      fontSize: '24px',
      margin: '10px 0',
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
  };

  const handleMenuToggle = () => {
    console.log("Menu toggled"); // Debugging log
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={styles.container}>
      <div style={styles.burgerButton} onClick={handleMenuToggle}>
        <FaBars />
      </div>

      <div style={styles.hepta}>
        <h1>Hepta</h1>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>A free template by Colorlib. Download and share!</p>
      </div>

      {/* Menu Overlay */}
      <div style={styles.menuOverlay}>
        <FaTimes style={styles.closeButton} onClick={handleMenuToggle} />
        <Link to="/" style={styles.menuItem} onClick={handleMenuToggle}>Home</Link>
        <Link to="/hotels" style={styles.menuItem} onClick={handleMenuToggle}>Hotels</Link>
        <Link to="/gallery" style={styles.menuItem} onClick={handleMenuToggle}>Gallery</Link>
        <Link to="/news" style={styles.menuItem} onClick={handleMenuToggle}>News</Link>
        <Link to="/contact" style={styles.menuItem} onClick={handleMenuToggle}>Contact</Link>
      </div>
    </div>
  );
};

export default AboutUs;
