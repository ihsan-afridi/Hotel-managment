import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa'; // Video icon using FontAwesome
import locationImage from '../assets/location.jpg'; // Import the image from assets
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const WelcomeSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container py-3"> {/* Decreased padding */}
      <div className="row align-items-center">
        <div className={`col-md-6 ${windowWidth < 768 ? 'text-center mb-3' : 'text-left'}`}>
          <img 
            src={locationImage} 
            alt="Location" 
            className="img-fluid rounded" // Bootstrap classes for responsive image and rounded corners
            style={{ maxWidth: '80%' }} // Limit the image width
          />
        </div>
        <div className={`col-md-6 ${windowWidth < 768 ? 'text-center' : 'text-left'}`}>
          <h1 className="display-5 font-weight-bold"> {/* Decreased heading size */}
            <em>Welcome To Our Website</em>
          </h1>
          <p className="lead" style={{ fontSize: '0.9rem' }}> {/* Smaller font size for paragraph */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit temporibus at quos consequatur distinctio, dolorem laboriosam. Laudantium autem magni repudiandae, enim aliquid temporibus, fugiat molestias sapiente itaque eveniet minus sunt id dolores, tempora reprehenderit?
          </p>
          <p className="lead" style={{ fontSize: '0.9rem' }}> {/* Smaller font size for paragraph */}
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className="d-flex align-items-center" style={{ cursor: 'pointer', color: '#007bff' }}>
            <FaPlay className="mr-2" style={{ fontSize: '20px' }} /> {/* Icon is now on the left */}
            <span>Watch The Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
