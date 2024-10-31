import React from 'react';
import { FaStar } from "react-icons/fa";
import img1 from '../assets/img1.jpg'; // Ensure correct relative path
import img2 from '../assets/img2.jpg'; // Ensure correct relative path
import img3 from '../assets/img3.jpg'; // Ensure correct relative path
import img4 from '../assets/img4.jpg'; // Ensure correct relative path
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Cards = () => {
  const cards = [
    {
      title: 'Food & Wines',
      reviews: '3,239 reviews',
      image: img1,
    },
    {
      title: 'Resort & Spa',
      reviews: '4,921 reviews',
      image: img2,
    },
    {
      title: 'Hotel Rooms',
      reviews: '2,112 reviews',
      image: img3,
    },
    {
      title: 'Mountain Climbing',
      reviews: '1,732 reviews',
      image: img4,
    },
  ];

  return (
    <div className="container text-center my-5">
      {/* Header section */}
      <h2 className="display-5 font-weight-bold mb-3">Top Destination</h2>
      <p className="lead text-muted mb-4" style={{ fontStyle: 'italic' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
      </p>

      {/* Cards Section */} 
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card h-100" style={{ transition: 'transform 0.3s', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
              <img
                src={card.image}
                alt={card.title}
                className="card-img-top"
                style={{ height: '150px', objectFit: 'cover' }} // Decreased image height
              />
              <div className="card-body">
                <h3 className="card-title" style={{ fontStyle: 'italic', fontSize: '20px' }}>{card.title}</h3> {/* Italic title */}
                <div className="d-flex align-items-center" style={{ fontSize: '16px' }}>
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} style={{ marginRight: '5px', color: '#FFD700' }} />
                  ))}
                  {card.reviews}
                </div>
              </div>
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

export default Cards;
