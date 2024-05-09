import React, { useState } from 'react';
import './styles/Registration.css';
import '@fontsource/roboto/300.css';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';

dayjs.extend(timezone);

dayjs.extend(utc);

function Registration({ tg }) {

  const [formData, setFormData] = useState({
    formType: 'User',
    firstName: '',
    date: null,
    gender: '',
    city: '',
    skills: [],
    about: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSkillsChange = (e) => {
    setFormData({ ...formData, skills: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      date: formData.date?.toISOString(), 
    };
    tg.sendData(JSON.stringify(formattedData));
  };

  const skills = [
    {
      value: 'newie',
      label: 'Новичок',
    },
    {
      value: 'amateur',
      label: 'Любитель',
    },
    {
      value: 'enthusiast',
      label: 'Энтузиаст',
    },
    {
      value: 'experienced',
      label: 'Опытный игрок',
    },
    {
      value: 'professional',
      label: 'Профессионал',
    },
  ];

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
              required
              value={formData.date}
              onChange={(date) => setFormData({ ...formData, date: date })}
              label="Дата рождения"
              textField={<TextField  name="date" id="date" />}
              slotProps={{ textField: { size: 'small' } }}
              fullWidth   
              timezone="UTC"
            />
          </LocalizationProvider>
        </div>
        <div className="input-container">
          <TextField
            required
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
            required
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
          <FormControl fullWidth required >
            <InputLabel id="skills-label" style={{ textAlign: 'center', lineHeight: '0.7rem' }}>Навыки</InputLabel>
            <Select
              labelId="skills-label"
              id="skills"
              size = "small"
              multiple
              value={formData.skills}
              onChange={handleSkillsChange}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={skills.find(skill => skill.value === value).label} style={{ margin: 2 }} />
                  ))}
                </div>
              )}
            >
              {skills.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </div>
        <div className="input-container">
          <TextField
            id="about"
            name="about"
            label="Расскажи о себе..."
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