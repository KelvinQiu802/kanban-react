import './App.css';
import './components/event.css';
import './components/task.css';
import React from 'react';
import EventBar from './components/EventBar';
import TaskBox from './components/TaskBox';
import uuid from 'react-uuid';

function App() {
  const [events, setEvents] = React.useState([
    {
      title: 'Battleship',
      ['To do']: [
        {
          name: 'Something1',
          id: uuid(),
          details: 'Something Something Something',
          state: 'To do',
        },
      ],
      ['In progress']: [
        {
          name: 'Something2',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'In progress',
        },
      ],
      ['Completed']: [
        {
          name: 'Something3',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'Completed',
        },
      ],
    },
    {
      title: 'Reading',
      ['To do']: [
        {
          name: 'Something',
          id: uuid(),
          details: 'Something Something Something',
          state: 'To do',
        },
      ],
      ['In progress']: [
        {
          name: 'Something',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'In progress',
        },
      ],
      ['Completed']: [
        {
          name: 'Something',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'Completed',
        },
      ],
    },
  ]);

  const [currentEvent, setCurrentEvent] = React.useState(events[0]);

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
