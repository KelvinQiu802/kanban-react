import './App.css';
import './components/event.css';
import './components/task.css';
import React from 'react';
import EventBar from './components/EventBar';
import TaskBox from './components/TaskBox';

function App() {
  const [events, setEvents] = React.useState(() => {
    return localStorage.getItem('events')
      ? JSON.parse(localStorage.getItem('events'))
      : [
          {
            title: 'Add a new Event',
            ['To do']: [],
            ['In progress']: [],
            ['Completed']: [],
          },
        ];
  });

  const [currentEvent, setCurrentEvent] = React.useState(events[0]);

  React.useEffect(() => {
    if (!events.length) {
      localStorage.setItem(
        'events',
        JSON.stringify([
          {
            title: 'Add a new Event',
            ['To do']: [],
            ['In progress']: [],
            ['Completed']: [],
          },
        ])
      );
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
