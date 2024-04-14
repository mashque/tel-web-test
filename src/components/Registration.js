import React, { useState } from 'react';
import './styles/Registration.css';

const tg =window.Telegram.WebApp;
tg.expand();

function Registration({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    dob: '',
    gender: '',
    city: '',
    about: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    tg.sendData(JSON.stringify(formData));
  };
  
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Имя</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Имя" required />
      <label htmlFor="age">Дата рождения:</label>
      <input type="date" id="age" name="age" value={formData.age} onChange={handleChange} required />
        <label htmlFor="gender">Пол:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </select>
        <label htmlFor="city">Город:</label>
        <select id="city" name="city" value={formData.city} onChange={handleChange} required>
          <option value="">Выберите город</option>
          <option value="mos">Москва</option>
          <option value="spb">Санкт-Петербург</option>
          <option value="ekb">Екатеринбург</option>
          <option value="krsk">Красноярск</option>
          <option value="nsk">Новосибирск</option>
          <option value="tsk">Томск</option>
        </select>
        <label htmlFor="about">О себе:</label>
        <textarea id="about" name="about" value={formData.about} onChange={handleChange} rows="4" required />
        <button type="submit">Зарегистрироваться</button>
      </form>
      </div>
  );
}
export default Registration;