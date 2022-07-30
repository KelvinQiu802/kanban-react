import AddButton from './AddButton';

const EventBar = ({ events, setEvents }) => {
  return (
    <div className='event-bar'>
      <h1 className='event-bar-title'>.todo</h1>
      <div className='event-container'>
        <AddButton />
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
