import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Management = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      maxWidth: '600px',
      lineHeight: '1.6',
    },
  };

  return (
    <div className="container py-4">
      <div style={styles.container}>
        <h1 style={styles.heading}>
          <em>International Tour Management</em> {/* Italicized title */}
        </h1>
        <p style={styles.description}>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>
    </div>
  );
};

export default Management;
