import React, { useState } from 'react';
import './CreateEventForm.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
dayjs.extend(timezone);

dayjs.extend(utc);

function CreateEventForm({ tg }) {
  const [eventData, setEventData] = useState({
    formType: 'Game',
    gameName: '',
    city: '',
    date: null,
    time: null,
    skills: [],
    about: ''
  });
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

  const handleSkillsChange = (e) => {
    setEventData({ ...eventData, skills: e.target.value }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tg.sendData(JSON.stringify(eventData));
    //console.log(eventData)
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
              timezone="UTC"
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
              timezone="UTC"
              />
          <div className="input-container">
          <FormControl fullWidth required style={{marginTop:'15px'}}>
            <InputLabel id="skills-label" style={{ textAlign: 'center', lineHeight: '0.7rem' }}>Навыки</InputLabel>
            <Select
              labelId="skills-label"
              id="skills"
              size = "small"
              multiple
              value={eventData.skills}
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
         </LocalizationProvider>
        </div>
        <div className="input-container">
          <TextField
            id="about"
            name="about"
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
