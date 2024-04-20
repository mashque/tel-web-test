import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/Events/Events';
import Navigation from './components/Navigation';
import RegistrationForm from './components/Registration';
import UserInfo from './components/About';
import '@fontsource/roboto/300.css';
import './App.css';


function App() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleRegistration = (data) => {
    setFormData(data);
    setRegistered(true);
  };

  return (
    <Router>
      <div>

        <Navigation />       
        <Routes>
          <Route path="/about" element={registered ? <UserInfo formData={formData} /> : <RegistrationForm onSubmit={handleRegistration} />} />
          <Route path="/events" element={<Events/>} />
        </Routes>

      </div>
    </Router>
    
  );
}

export default App;

