import AddButton from './AddButton';

const EventBar = ({ events, setEvents }) => {
  const handleAdd = () => {
    const title = prompt('Enter the Title:');
    if (title) setEvents((prev) => [...prev, { title: title }]);
  };

  return (
    <div className='event-bar'>
      <h1 className='event-bar-title'>.todo</h1>
      <div className='event-container'>
        <AddButton handleClick={handleAdd} />
        {events.map((item) => (
          <div key={item.title} className='event over-hide'>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBar;
