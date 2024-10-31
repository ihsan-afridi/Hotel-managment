import React from 'react';
import { FaUtensils, FaPlane, FaMapMarkedAlt, FaUmbrellaBeach, FaMountain, FaBicycle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Experience = () => {
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center', // Center-align text in the container
    },
    sectionTitle: {
      fontSize: '22px', // Increased font size for section titles
      fontWeight: 'bold',
      margin: '10px 0',
    },
    sectionContent: {
      fontSize: '16px', // Increased font size for section content
    },
    icon: {
      fontSize: '50px', // Increased icon size
      marginBottom: '10px',
      color: '#007bff', // Change icon color (Bootstrap primary color)
    },
  };

  return (
    <div className="container py-4">
      <h1 style={{ ...styles.sectionTitle, fontSize: '28px', textAlign: 'center' }}>
        <em>Experience Once In Your Lifetime</em>
      </h1>
      <p style={{ ...styles.sectionContent, fontSize: '18px', textAlign: 'center' }}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>

      <div className="row">
        {/* Good Foods Section */}
        <div className="col-md-4 mb-4">
          <div style={styles.icon}>
            <FaUtensils style={styles.icon} />
          </div>
          <h2 style={styles.sectionTitle}>Good Foods</h2>
          <p style={styles.sectionContent}>
            Far far away, behind the word mountains.
          </p>
        </div>

        {/* Travel Anywhere Section */}
        <div className="col-md-4 mb-4">
          <div style={styles.icon}>
            <FaMapMarkedAlt style={styles.icon} />
          </div>
          <h2 style={styles.sectionTitle}>Travel Anywhere</h2>
          <p style={styles.sectionContent}>
            Far far away, behind the word mountains.
          </p>
        </div>

        {/* Airplane Section */}
        <div className="col-md-4 mb-4">
          <div style={styles.icon}>
            <FaPlane style={styles.icon} />
          </div>
          <h2 style={styles.sectionTitle}>Airplane</h2>
          <p style={styles.sectionContent}>
            Far far away, behind the word mountains.
          </p>
        </div>

        {/* Beach Resort Section */}
        <div className="col-md-4 mb-4">
          <div style={styles.icon}>
            <FaUmbrellaBeach style={styles.icon} />
          </div>
          <h2 style={styles.sectionTitle}>Beach Resort</h2>
          <p style={styles.sectionContent}>
            Far far away, behind the word mountains.
          </p>
        </div>

        {/* Mountain Climbing Section */}
        <div className="col-md-4 mb-4">
          <div style={styles.icon}>
            <FaMountain style={styles.icon} />
          </div>
          <h2 style={styles.sectionTitle}>Mountain Climbing</h2>
          <p style={styles.sectionContent}>
            Far far away, behind the word mountains.
          </p>
        </div>

        {/* Hot Air Balloon Section */}
        <div className="col-md-4 mb-4">
          <div style={styles.icon}>
            <FaBicycle style={styles.icon} />
          </div>
          <h2 style={styles.sectionTitle}>Hot Air Balloon</h2>
          <p style={styles.sectionContent}>
            Far far away, behind the word mountains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
