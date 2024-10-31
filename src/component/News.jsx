import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Use the desired background image path
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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
      zIndex: 10,
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
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      display: isOverlayOpen ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      zIndex: 20,
    },
    link: {
      fontSize: '2rem',
      color: 'white',
      textDecoration: 'none',
      margin: '10px 0',
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
      <div style={styles.burgerButton} onClick={() => setIsOverlayOpen(true)}>
        <FaBars />
      </div>

      {/* Hepta logo text */}
      <div style={styles.hepta}>
        <h1>Hepta</h1>
      </div>

      {/* Main Content */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={styles.heading}>Blogs</h1>
        <p style={styles.paragraph}>Stay updated with the latest news from our company and beyond!</p>
      </div>

      {/* Full-screen Overlay with Links */}
      <div style={styles.overlay}>
        <FaTimes style={styles.closeButton} onClick={() => setIsOverlayOpen(false)} />
        <Link to="/" style={styles.link} onClick={() => setIsOverlayOpen(false)}>Home</Link>
        <Link to="/about-us" style={styles.link} onClick={() => setIsOverlayOpen(false)}>About Us</Link>
        <Link to="/contact" style={styles.link} onClick={() => setIsOverlayOpen(false)}>Contact</Link>
        <Link to="/gallery" style={styles.link} onClick={() => setIsOverlayOpen(false)}>Gallery</Link>
        <Link to="/hotels" style={styles.link} onClick={() => setIsOverlayOpen(false)}>Hotel</Link>
      </div>
    </div>
  );
};

export default News;
