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
      tasks: [
        {
          name: 'Something',
          id: uuid(),
          details: 'Something Something Something',
          state: 'To do',
        },
        {
          name: 'Something',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'In progress',
        },
        {
          name: 'Something',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'Completed',
        },
      ],
    },
    {
      title: 'Reading',
      tasks: [
        {
          name: 'Something',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'To do',
        },
        {
          name: 'Something',
          id: uuid(),
          details: 'SomethingSomethingSomething',
          state: 'In progress',
        },
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
