import React from 'react';
import img1 from '../assets/img1.jpg'; // Adjust the path if needed
import img2 from '../assets/img2.jpg'; // Adjust the path if needed
import img3 from '../assets/img6.jpg'; // Adjust the path if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RecentBlog = () => {
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#000',
      fontStyle: 'italic', // Apply italic style here
    },
    description: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '30px',
    },
    post: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      transition: '0.3s',
      position: 'relative', // For hover effect
      overflow: 'hidden', // To contain the hover effect
    },
    postImage: {
      width: '100%',
      height: '300px', // Adjust image height
      borderRadius: '10px 10px 0 0', // Round top corners
      objectFit: 'cover', // Ensures the image covers the area
      marginBottom: '15px',
      transition: '0.3s', // Smooth transition for image on hover
    },
    postTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    postContent: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
    postDate: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Recent Blog Post</h1>
      <p style={styles.description}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>

      {/* Blog Posts */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div style={styles.post} className="card h-100">
            <img
              style={styles.postImage}
              src={img1}
              alt="Blog Post 1"
              className="card-img-top"
            />
            <div className="card-body">
              <p style={styles.postDate}>February 26, 2018</p>
              <h2 style={styles.postTitle} className="card-title">45 Best Places To Unwind</h2>
              <p style={styles.postContent} className="card-text">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div style={styles.post} className="card h-100">
            <img
              style={styles.postImage}
              src={img2}
              alt="Blog Post 2"
              className="card-img-top"
            />
            <div className="card-body">
              <p style={styles.postDate}>February 26, 2018</p>
              <h2 style={styles.postTitle} className="card-title">45 Best Places To Unwind</h2>
              <p style={styles.postContent} className="card-text">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div style={styles.post} className="card h-100">
            <img
              style={styles.postImage}
              src={img3}
              alt="Blog Post 3"
              className="card-img-top"
            />
            <div className="card-body">
              <p style={styles.postDate}>February 26, 2018</p>
              <h2 style={styles.postTitle} className="card-title">45 Best Places To Unwind</h2>
              <p style={styles.postContent} className="card-text">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for hover effect */}
      <style jsx>{`
        .card:hover {
          transform: translateY(-5px); /* Move card up slightly */
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
        }

        .card-img-top:hover {
          transform: scale(1.05); /* Scale image on hover */
        }
      `}</style>
    </div>
  );
};

export default RecentBlog;
