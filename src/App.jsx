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
          name: 'Welcome Page',
          id: uuid(),
          details: 'Create welcome page and a start button',
        },
        {
          name: 'Design Result Page',
          id: uuid(),
          details: 'Design the Result page and send it to Lydia.',
        },
      ],
      ['In progress']: [
        {
          name: 'Board',
          id: uuid(),
          details: 'Beautifying the Board UI',
        },
      ],
      ['Completed']: [
        {
          name: 'Discussion',
          id: uuid(),
          details: '8pm, Jul 31, Zomm Meeting with group partners',
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
