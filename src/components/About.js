import React from 'react';
import './styles/About.css';
import { format } from 'date-fns';
const tg =window.Telegram.WebApp;
tg.expand();

function About({ formData }) {
  console.log('Date of birth:', formData.age);
  const formattedDate = formData.age ? format(new Date(formData.age), 'dd/MM/yyyy') : '';

  const data = {
    name : formData.firstName,
    age : formData.age,
    gender : formData.gender,
    city : formData.city,
    about : formData.about
  }
  
  tg.sendData(JSON.stringify(data));
  
  return (
    <div className="container"> 
      <h2>Информация о пользователе:</h2>
      <p>Имя: {formData.firstName}</p>
      <p>Дата рождения: {formattedDate}</p>
      <p>Пол {formData.gender}</p>
      <p>Город {formData.city}</p>
      <p>О себе {formData.about}</p>
    </div>
  );
}

export default About;