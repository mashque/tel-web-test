import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/Events/Events';
import Navigation from './components/Navigation';
import '@fontsource/roboto/300.css';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styles/theme';
import About from './components/About';



function App() {
 

  return (
    <Router>
      <div>
      <ThemeProvider theme={theme}>
        <Navigation />       
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events/>} />
        </Routes>
        </ThemeProvider>
      </div>
    </Router>
    
  );
}

export default App;

