import React, { useState } from 'react';
import { useBusContext } from '../context/BusContext';

const BookingForm = () => {
  const { buses, setBuses } = useBusContext();  // Access buses and setBuses from context
  const [selectedBus, setSelectedBus] = useState('');
  const [name, setName] = useState('');
  const [booked, setBooked] = useState(false);

  const handleBooking = () => {
    const bus = buses.find(b => b.id === selectedBus);
    if (bus && bus.availableSeats > 0) {
      bus.availableSeats -= 1;
      setBuses([...buses]);  // Update the buses state in context
      setBooked(true);
    } else {
      alert('No seats available!');
    }
  };

  return (
    <div>
      <h2>Book a Bus</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select onChange={(e) => setSelectedBus(e.target.value)}>
        <option value="">Select Bus</option>
        {buses.map(bus => (
          <option key={bus.id} value={bus.id}>
            {bus.route} - {bus.time}
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Book Now</button>
      {booked && <p>Booking Successful!</p>}
    </div>
  );
};

export default BookingForm;
