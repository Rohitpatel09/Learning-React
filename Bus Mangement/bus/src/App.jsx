import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BusProvider } from './context/BusContext'; // Import BusProvider
import BusSchedule from './components/BusSchedule';
import BookingForm from './components/BookingForm';
import StudentProfile from './components/StudentProfile';
import AdminPanel from './components/AdminPanel';

// Default homepage or dashboard component
const Home = () => {
  return (
    <div>
      <h1>Welcome to the College Bus Management System</h1>
    </div>
  );
};

const App = () => {
  return (
    <BusProvider> {/* BusProvider wraps the Router */}
      <Router> {/* Router wraps the Routes */}
        <Routes> {/* Define Routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<BusSchedule />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </BusProvider>
  );
};

export default App;
