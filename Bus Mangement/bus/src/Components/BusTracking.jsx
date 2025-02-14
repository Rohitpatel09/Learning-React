// BusTracking.js
import React from 'react';

const BusTracking = ({ busLocation }) => {
  return (
    <div>
      <h2>Bus Location</h2>
      <div>
        {/* Integrate Google Maps or any map API to show bus location */}
        <p>Bus is at latitude: {busLocation.lat}, longitude: {busLocation.lng}</p>
      </div>
    </div>
  );
};

export default BusTracking;
