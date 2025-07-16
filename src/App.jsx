// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign Up/Sign_Up';
import AppointmentFormIC from './Components/InstantConsultation/AppointmentFormIC/AppointmentFormIC';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearchIC from './Components/InstantConsultation/FindDoctorSearchIC/FindDoctorSearchIC';
import BookingConsultation from './Components/BookingConsultation'


import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
// import BookingConsultation from './components/BookingConsultation';
// import Notification from './components/Notification/Notification';
import ReviewForm from './components/ReviewForm/ReviewForm'
// import ProfileCard from './components/ProfileCard/ProfileCard';
// import ReportsLayout from './components/ReportsLayout/ReportsLayout';


// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Sign_Up/>}/>
            <Route path='/instant-consultation' element={<InstantConsultation/>} />
            <Route path="/finddoctor" element={<FindDoctorSearchIC />} />
            <Route path='/search/doctors' element={<BookingConsultation /> } />
            <Route path='/reviews' element={<ReviewForm/>}/>
            {/* <Route path='/profile' element={<ProfileCard/>} /> */}
            {/* <Route path='/reports' element={<ReportsLayout/>} /> */}

          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;