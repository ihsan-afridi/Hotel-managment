import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HappyCustomers = () => {
  const testimonials = [
    {
      name: "Clare Gupta",
      message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      name: "Rogie Slater",
      message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      name: "John Doe",
      message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
  ];

  const styles = {
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '36px', // Increased font size for the title
      fontStyle: 'italic', // Applied italic style
    },
    testimonialCard: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      transition: '0.3s',
      height: '100%', // Make cards fill the height of the column
    },
    profileIcon: {
      fontSize: '60px', // Large profile icon
      color: '#555',
      marginBottom: '15px',
    },
    message: {
      fontStyle: 'italic',
      fontSize: '18px', // Increased font size
      lineHeight: '1.7',
      marginBottom: '10px',
    },
    name: {
      fontWeight: 'bold',
      fontSize: '20px', // Increased font size for name
    },
  };

  return (
    <div className="container">
      <h2 style={styles.title}>Happy Customers</h2> {/* Italic and increased size */}
      <div className="row">
        {testimonials.map((customer, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div style={styles.testimonialCard} className="card h-100 d-flex flex-column align-items-center">
              {/* Center the icon */}
              <FaUserCircle style={styles.profileIcon} />
              <p style={styles.message}>{customer.message}</p>
              <p style={styles.name}>{customer.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add CSS for hover effect */}
      <style jsx>{`
        .card:hover {
          transform: translateY(-5px); /* Move card up slightly */
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
        }
      `}</style>
    </div>
  );
};

export default HappyCustomers;
