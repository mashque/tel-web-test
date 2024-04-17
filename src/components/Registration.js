import React, { useState } from 'react';
import './styles/Registration.css';
import '@fontsource/roboto/300.css';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


function Registration({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    age: '',
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
    {
      value: 'mos',
      label: 'Москва',
    },
    {
      value: 'sbp',
      label: 'Санкт-Петербург',
    },
    {
      value: 'ekb',
      label: 'Екатеринбург',
    },
    {
      value: 'nsk',
      label: 'Нвосибирск',
    },
    {
      value: 'krsk',
      label: 'Красноярск',
    },
    {
      value: 'tsk',
      label: 'Томск',
    },
  ];
  
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
    <TextField
          required
          id="firstName"
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange}
          label="Твоё имя"
          defaultValue="Имя"
          size="small"
          margin="normal"
        />
      <LocalizationProvider size="small" margin="normal" label= "Дата рождения" dateAdapter={AdapterDayjs} id="age" name="age" value={formData.age} onChange={handleChange} required>
        <DatePicker />
      </LocalizationProvider>
      <TextField
          name="gender" value={formData.gender} onChange={handleChange}
          id="gender"
          select
          label="Пол"
          defaultValue="m"
          helperText="Выберите свой пол"
          size="small"
          margin="normal"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="city" value={formData.city} onChange={handleChange}
          id="city"
          select
          label="Город"
          defaultValue="m"
          helperText="Выберите свой свой город"
          size="small"
          margin="normal"
          
        >
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField 
         id="about" 
         name="about" 
         label="Расскажи о себе: какими видами спорта интересуешься, какие навыки имеешь" 
         variant="outlined" 
         value={formData.about} 
         onChange={handleChange} 
         fullWidth
         multiline
         rows={4}
         required
         margin="normal"/>
        <Button type="submit" variant="outlined">Готово</Button>
      </form>
      </div>
  );
}
export default Registration;