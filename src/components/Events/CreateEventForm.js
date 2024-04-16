import React, { useState } from 'react';

function CreateEventForm() {
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [time, setTime] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправить данные на сервер или выполнить другие действия
    const eventData = {
      sport,
      date,
      time,
      skills
    };
    console.log('Создано новое мероприятие:', eventData); 
    // Сбросить значения полей формы
    setSport('');
    setDate('');
    setTime('');
    setSkills('');
  };

  return (
    <div className="form-container">
      <h3>Запланировать игру</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input placeholder="Название вида спорта" type="text" value={sport} onChange={(e) => setSport(e.target.value)} required/>
        </label>
        <select id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">Город проведения</option>
          <option value="mos">Москва</option>
          <option value="spb">Санкт-Петербург</option>
          <option value="ekb">Екатеринбург</option>
          <option value="krsk">Красноярск</option>
          <option value="nsk">Новосибирск</option>
          <option value="tsk">Томск</option>
        </select>
        <label>
          Дата проведения:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </label>
        <label>
          Время проведения:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required/>
        </label>
        <label>
        <textarea placeholder="Расскажи о себе: какими видами спорта интересуешься, какие навыки имеешь" id="about" name="about" value={skills} onChange={(e) => setSkills(e.target.value)} rows="4" required />
        </label>
        <div className="button-group">
          <button type="submit">Создать</button>
          <button type="button">Назад</button>
        </div>
      </form>
    </div>
  );
}

export default CreateEventForm;