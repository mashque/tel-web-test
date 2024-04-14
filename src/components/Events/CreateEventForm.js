import React, { useState } from 'react';

function CreateEventForm() {
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [time, setTime] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете отправить данные на сервер или выполнить другие действия
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
      <h3>Создать новое мероприятие</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Спорт:
          <input type="text" value={sport} onChange={(e) => setSport(e.target.value)} />
        </label>
        <label htmlFor="city">Город:</label>
        <select id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">Выберите город</option>
          <option value="mos">Москва</option>
          <option value="spb">Санкт-Петербург</option>
          <option value="ekb">Екатеринбург</option>
          <option value="krsk">Красноярск</option>
          <option value="nsk">Новосибирск</option>
          <option value="tsk">Томск</option>
        </select>
        <label>
          Дата:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Время:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Навыки:
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </label>
        <button type="submit">Создать</button>
        <button type="submit">Назад</button>
      </form>
    </div>
  );
}

export default CreateEventForm;