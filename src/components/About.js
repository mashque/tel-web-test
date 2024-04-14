import React from 'react';
import './styles/About.css'
const tg =window.Telegram.WebApp;
tg.expand();

function About({ formData }) {
  tg.sendData(JSON.stringify(formData));
  return (
    <div clessName="container"> 
      <h2>Информация о пользователе:</h2>
      <p>Имя: {formData.firstName}</p>
      <p>Дата рождения {formData.age}</p>
      <p>Пол {formData.gender}</p>
      <p>Город {formData.city}</p>
      <p>О себе {formData.about}</p>
    </div>
  );
}

export default About;