import Column from './Column';

const TaskBox = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleRemove = () => {
    if (confirm('You really whant to remove it?')) {
      setEvents((prev) => {
        const result = prev.filter((item) => item.title != currentEvent.title);
        if (!result.length) {
          setEvents([{ title: 'Add a New Event', tasks: [] }]);
          setCurrentEvent({ title: 'Add a Event New', tasks: [] });
        } else {
          setCurrentEvent(result[0]);
        }
        return result;
      });
    }
  };

  return (
    <div className='task-box'>
      <header className='task-box-header'>
        <h1 className='task-box-title'>All Tasks</h1>
        <button className='remove-button' onClick={handleRemove}>
          Remove this Event
        </button>
      </header>
      <div className='task-box-body'>
        <Column tag='To do' />
        <Column tag='In progress' />
        <Column tag='Completed' />
      </div>
    </div>
  );
};

export default TaskBox;
