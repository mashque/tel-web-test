import React, { useState } from 'react';
import EventsList from './EventsList';
import CreateEventForm from './CreateEventForm';
import './Events.css'
import 'boxicons'

function Events() {
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEventList, setShowEventList] = useState(false);

  const handleFindEvent = () => {
    setShowEventList(true);
    setShowCreateForm(false);
    setButtonsVisible(false); 
  };

  const handleCreateEvent = () => {
    setShowEventList(false);
    setShowCreateForm(true);
    setButtonsVisible(false); 
  };

  return (
    <div className="search-bar">
    <input type="text" placeholder="Поиск..." />
    <div className="button-group">
      {buttonsVisible && (
        <>
          <button className="find-button" onClick={handleFindEvent}><box-icon name='search-alt-2'></box-icon></button>
          <button className="create-button" onClick={handleCreateEvent}><box-icon name='plus'></box-icon></button>
          
        </>
      )}
      {showEventList ? <EventsList /> : null}
      {showCreateForm ? <CreateEventForm /> : null}
    </div>
    </div>
  );
}

export default Events;