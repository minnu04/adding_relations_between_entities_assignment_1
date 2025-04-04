import React from 'react';

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      width: '300px',
      padding: '16px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
      />
      <h2>{name}</h2>
      <h4>{location}</h4>
      <p>{description}</p>
      <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>{price}</p>
    </div>
  );
};

export default DestinationCard;