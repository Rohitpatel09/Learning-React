import React, { createContext, useState, useContext } from 'react';

const BusContext = createContext();

export const useBusContext = () => useContext(BusContext);

export const BusProvider = ({ children }) => {
  const [buses, setBuses] = useState([
    { id: 1, route: 'Route A', time: '9:00 AM', availableSeats: 10 },
    { id: 2, route: 'Route B', time: '10:00 AM', availableSeats: 5 },
  ]);
  
  const [student, setStudent] = useState({
    name: 'John Doe',
    bookings: [],
  });

  console.log('BusContext Value:', { buses, student });  // Debugging line to verify context values

  return (
    <BusContext.Provider value={{ buses, student, setBuses, setStudent }}>
      {children}
    </BusContext.Provider>
  );
};
