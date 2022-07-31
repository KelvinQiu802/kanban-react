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

  // const [events, setEvents] = React.useState([
  //   {
  //     title: 'Battleship',
  //     ['To do']: [
  //       {
  //         name: 'Welcome Page',
  //         id: uuid(),
  //         details: 'Create welcome page and a start button',
  //       },
  //       {
  //         name: 'Design Result Page',
  //         id: uuid(),
  //         details: 'Design the Result page and send it to Lydia.',
  //       },
  //     ],
  //     ['In progress']: [
  //       {
  //         name: 'Board',
  //         id: uuid(),
  //         details: 'Beautifying the Board UI',
  //       },
  //     ],
  //     ['Completed']: [
  //       {
  //         name: 'Discussion',
  //         id: uuid(),
  //         details: '8pm, Jul 31, Zomm Meeting with group partners',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Reading',
  //     ['To do']: [
  //       {
  //         name: 'Something',
  //         id: uuid(),
  //         details: 'Something Something Something',
  //         state: 'To do',
  //       },
  //     ],
  //     ['In progress']: [
  //       {
  //         name: 'Something',
  //         id: uuid(),
  //         details: 'SomethingSomethingSomething',
  //         state: 'In progress',
  //       },
  //     ],
  //     ['Completed']: [
  //       {
  //         name: 'Something',
  //         id: uuid(),
  //         details: 'SomethingSomethingSomething',
  //         state: 'Completed',
  //       },
  //     ],
  //   },
  // ]);

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
