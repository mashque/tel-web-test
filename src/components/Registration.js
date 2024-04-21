import React, { useState } from 'react';
import './styles/Registration.css';
import '@fontsource/roboto/300.css';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Telegram } from '../hooks/telegram';



function Registration({ onSubmit }) {
  const {tg} = Telegram();
  const [formData, setFormData] = useState({
    firstName: '',
    age: null,
    gender: '',
    city: '',
    about: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    tg.sendData(JSON.stringify(formData));
  };


  const genders = [
    {
      value: 'm',
      label: 'Мужской',
    },
    {
      value: 'f',
      label: 'Женский',
    },
  ];

  const cities = [
    { value: 'mos', label: 'Москва' },
    { value: 'sbp', label: 'Санкт-Петербург' },
    { value: 'ekb', label: 'Екатеринбург' },
    { value: 'nsk', label: 'Новосибирск' },
    { value: 'krsk', label: 'Красноярск' },
    { value: 'tsk', label: 'Томск' },
  ];
  
  return (
    <div className="form-container" >
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <TextField 
            required
            id="firstName"
            name="firstName"
            onChange={handleChange}
            label="Твоё имя"
            backgroundcolor="primary"
            size="small"
          />    
        </div>
        <div className="input-container" >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker            
              value={formData.age}
              onChange={(date) => setFormData({ ...formData, age: date })}
              label="Дата рождения"
              textField={<TextField  name="age" id="age" />}
              slotProps={{ textField: { size: 'small' } }}
              fullWidth   
            />
          </LocalizationProvider>
        </div>
        <div className="input-container">
          <TextField
            name="gender"
            onChange={handleChange}
            id="gender"
            select
            label="Пол"
            size="small"
            fullWidth
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="input-container">
          <TextField
            name="city"
            onChange={handleChange}
            id="city"
            select
            label="Город"
            size="small"
            fullWidth
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="input-container">
          <TextField
            id="about"
            name="about"
            label="Расскажи о себе: какими видами спорта интересуешься, какие навыки имеешь"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </div>
        <Button type="submit" variant="contained" color="primary" >Готово</Button>
      </form>
    </div>
  );
}

export default Registration;