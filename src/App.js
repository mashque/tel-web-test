import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/Events/Events';
import Navigation from './components/Navigation';
import RegistrationForm from './components/Registration';
import UserInfo from './components/About';
import '@fontsource/roboto/300.css';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styles/theme';



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
      <ThemeProvider theme={theme}>
        <Navigation />
        
        <Routes>
          <Route path="/about" element={registered ? <UserInfo formData={formData} /> : <RegistrationForm onSubmit={handleRegistration} />} />
          <Route path="/events" element={<Events/>} />
        </Routes>
        </ThemeProvider>
      </div>
    </Router>
    
  );
}

export default App;

