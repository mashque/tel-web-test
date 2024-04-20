import React, {useEffect, useState} from 'react';
import './styles/About.css';
import RegistrationForm from './Registration';

const tg =window.Telegram.WebApp;
tg.expand();

function About({ formData }) {
  const [userData, setUserData] = useState(null);

  const data = {
    name : formData.firstName,
    age : formData.age,
    gender : formData.gender,
    city : formData.city,
    about : formData.about
  }
  
  tg.sendData(JSON.stringify(data));

  useEffect(() => {
    fetch('https://fascinating-lolly-cde354.netlify.app')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  
  return (
    <div className="container"> 
      <h2>Информация о пользователе:</h2>
      {userData ? (
        <>
          <p>Имя: {userData.first_name}</p>
          <p>Фамилия: {userData.last_name}</p>
          <p>Имя пользователя: {userData.username}</p>

        </>
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
}

export default About;