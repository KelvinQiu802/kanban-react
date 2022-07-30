import './App.css';
import './components/event.css';
import React from 'react';
import EventBar from './components/EventBar';
import TaskBox from './components/TaskBox';

function App() {
  const [events, setEvents] = React.useState([
    { title: 'Battleship' },
    { title: 'Reading' },
  ]);
  const [currentEvent, setCurrentEvent] = React.useState(null);
  return (
    <div className='App'>
      <EventBar events={events} setEvents={setEvents} />
      <TaskBox />
    </div>
  );
}

export default App;
