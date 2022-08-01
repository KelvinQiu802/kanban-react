import './App.css';
import './components/event.css';
import './components/task.css';
import React from 'react';
import EventBar from './components/EventBar';
import TaskBox from './components/TaskBox';

function App() {
  const initEvent = [
    {
      title: 'Add a new Event',
      ['To do']: [],
      ['In progress']: [],
      ['Completed']: [],
    },
  ];

  const [events, setEvents] = React.useState(() => {
    return localStorage.getItem('events')
      ? JSON.parse(localStorage.getItem('events'))
      : initEvent;
  });

  const [currentEvent, setCurrentEvent] = React.useState(events[0]);

  // Set localStorage
  React.useEffect(() => {
    if (!events.length) {
      localStorage.setItem('events', JSON.stringify(initEvent));
      setEvents(JSON.parse(localStorage.getItem('events')));
    } else {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);

  return (
    <div className='App'>
      <EventBar
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
      <TaskBox
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
    </div>
  );
}

export default App;
