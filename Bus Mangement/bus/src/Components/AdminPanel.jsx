import React from 'react';
import { useBusContext } from '../context/BusContext';

const AdminPanel = () => {
  const { buses } = useBusContext();  // Access buses from context

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Manage Buses</h3>
      <ul>
        {buses.map((bus, index) => (
          <li key={index}>
            {bus.route} - {bus.time} - {bus.availableSeats} seats available
          </li>
        ))}
      </ul>
      {/* Add functionality to add/update/delete buses */}
    </div>
  );
};

export default AdminPanel;
