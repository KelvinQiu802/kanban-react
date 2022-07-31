import AddButton from './AddButton';

const EventBar = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleAdd = () => {
    const title = prompt('Enter the Title:');
    if (title) setEvents((prev) => [...prev, { title: title, tasks: {} }]);
  };

  return (
    <div className='event-bar'>
      <h1 className='event-bar-title'>.kanban</h1>
      <div className='event-container'>
        <AddButton handleClick={handleAdd} />
        {events.map((item) => (
          <div
            key={item.title}
            className={`event over-hide ${
              currentEvent.title === item.title ? 'selected-event' : null
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
