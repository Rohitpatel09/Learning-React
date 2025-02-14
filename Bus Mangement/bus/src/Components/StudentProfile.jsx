import React from 'react';
import { useBusContext } from '../context/BusContext';

const StudentProfile = () => {
  const { student } = useBusContext();  // Access student from context

  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <h3>Past Bookings</h3>
      <ul>
        {student.bookings.map((booking, index) => (
          <li key={index}>
            {booking.route} - {booking.time} - Seat No: {booking.seatNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentProfile;
