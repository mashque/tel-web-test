import React, { useState } from 'react';
import './CreateEventForm.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function CreateEventForm({ tg }) {
  const [eventData, setEventData] = useState({
    formType: 'Game',
    gameName: '',
    city: '',
    date: null,
    time: null,
    skills: ''
  });

  const cities = [
    { value: 'mos', label: 'Москва' },
    { value: 'sbp', label: 'Санкт-Петербург' },
    { value: 'ekb', label: 'Екатеринбург' },
    { value: 'nsk', label: 'Новосибирск' },
    { value: 'krsk', label: 'Красноярск' },
    { value: 'tsk', label: 'Томск' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...eventData,
      date: eventData.date?.toISOString(), 
      
    };
    tg.sendData(JSON.stringify(formattedData));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <TextField 
            required
            id="gameName"
            name="gameName"
            onChange={handleChange}
            label="Вид спорта"
            fullWidth
            size="small"
          />    
        </div>
        <div className="input-container">
          <TextField
            name="city"
            onChange={handleChange}
            id="city"
            select
            label="Город"
            fullWidth
            size="small"
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="input-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker            
              value={eventData.date}
              onChange={(date) => setEventData({ ...eventData, date: date })}
              label="Дата"
              textField={<TextField  name="date" id="date"/>}
              slotProps={{ textField: { size: 'small' } }}
              fullWidth   
            />
          </LocalizationProvider>
        </div>
        <div className="input-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <TimePicker  value={eventData.time}
              onChange={(time) => setEventData({ ...eventData, time: time })}
              label="Время"
              textField={<TextField  name="time" id="time" />}
              slotProps={{ textField: { size: 'small' } }}
              fullWidth    
              ampm={false}
              />

         </LocalizationProvider>
        </div>
        <div className="input-container">
          <TextField
            id="skills"
            name="skills"
            label="Навыки"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </div>
        <div className="buttons-container">
          <Button type="submit" variant="contained" color="primary">Готово</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateEventForm;
