import './App.css';
import './components/event.css';
import './components/task.css';
import React from 'react';
import EventBar from './components/EventBar';
import TaskBox from './components/TaskBox';

function App() {
  const [events, setEvents] = React.useState([
    {
      title: 'Battleship',
      tasks: [
        {
          name: 'Something',
          detals: 'SomethingSomethingSomething',
          state: 'To do',
        },
        {
          name: 'Something',
          detals: 'SomethingSomethingSomething',
          state: 'In progress',
        },
        {
          name: 'Something',
          detals: 'SomethingSomethingSomething',
          state: 'Completed',
        },
      ],
    },
    {
      title: 'Reading',
      tasks: [
        {
          name: 'Something',
          detals: 'SomethingSomethingSomething',
          state: 'To do',
        },
        {
          name: 'Something',
          detals: 'SomethingSomethingSomething',
          state: 'In progress',
        },
        {
          name: 'Something',
          detals: 'SomethingSomethingSomething',
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
