import AddEventButton from './AddEventButton';

const EventBar = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleAdd = () => {
    const title = prompt('Enter the Title:');
    if (title)
      setEvents((prev) => [
        ...prev,
        { title: title, ['To do']: [], ['In progress']: [], ['Completed']: [] },
      ]);
  };

  return (
    <div className='event-bar'>
      <h1 className='event-bar-title'>.kanban</h1>
      <AddEventButton handleClick={handleAdd} />
      <div className='event-container'>
        {events.map((item) => (
          <div
            key={item.title}
            className={`event over-hide ${
              currentEvent.title === item.title ? 'selected-event' : ''
            }`}
            onClick={() => setCurrentEvent(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBar;
