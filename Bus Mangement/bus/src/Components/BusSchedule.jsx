import React, { useState, useEffect } from 'react';
import { useBusContext } from '../context/BusContext';

const BusSchedule = () => {
  const { buses } = useBusContext();  // Access buses from context
  const [filteredBuses, setFilteredBuses] = useState(buses);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const filterBuses = () => {
    let result = buses;
    if (selectedRoute) {
      result = result.filter(bus => bus.route === selectedRoute);
    }
    if (selectedTime) {
      result = result.filter(bus => bus.time === selectedTime);
    }
    setFilteredBuses(result);
  };

  useEffect(() => {
    filterBuses();
  }, [selectedRoute, selectedTime, buses]);  // Re-run filter if buses change

  return (
    <div>
      <h2>Bus Schedules</h2>
      <div>
        <label>Route:</label>
        <select onChange={(e) => setSelectedRoute(e.target.value)}>
          <option value="">All Routes</option>
          {['Route A', 'Route B', 'Route C'].map(route => (
            <option key={route} value={route}>{route}</option>
          ))}
        </select>
        
        <label>Time:</label>
        <select onChange={(e) => setSelectedTime(e.target.value)}>
          <option value="">All Times</option>
          {['9:00 AM', '10:00 AM', '11:00 AM'].map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <ul>
        {filteredBuses.map((bus, index) => (
          <li key={index}>
            {bus.route} - {bus.time} - {bus.availableSeats} seats available
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusSchedule;
