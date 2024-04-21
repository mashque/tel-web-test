import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsForm from './components/Events/CreateEventForm';
import Navigation from './components/Navigation';
import '@fontsource/roboto/300.css';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styles/theme';
import About from './components/About';
import Registration from './components/Registration';
import { Telegram } from './hooks/telegram';



function App() {
const {tg} = Telegram();

  return (
    <Router>
      <div>
      <ThemeProvider theme={theme}>
        <Navigation />       
        <Routes>
          <Route path="/registration" element={<Registration tg={tg} />}/>
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsForm tg={tg}/>} />
        </Routes>
        </ThemeProvider>
      </div>
    </Router>
    
  );
}

export default App;

