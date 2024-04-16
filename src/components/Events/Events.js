import React, { useState } from 'react';
import EventsList from './EventsList';
import CreateEventForm from './CreateEventForm';
import './Events.css'

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
    <div className="container">
      {buttonsVisible && (
        <>
          <button onClick={handleFindEvent}>Найти</button>
          <button onClick={handleCreateEvent}>Создать</button>
        </>
      )}
      {showEventList ? <EventsList /> : null}
      {showCreateForm ? <CreateEventForm /> : null}
    </div>
  );
}

export default Events;