import React from 'react';
import './styles/About.css';




function About() {    
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/receive_data', (req, res) => {
  const data = req.body;
  console.log("Received data from Telegram bot:", data);
  res.json({ message: 'Data received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  return (
    <div className="container"> 
      <p> Привет</p>
    </div>
  );
}

export default About;