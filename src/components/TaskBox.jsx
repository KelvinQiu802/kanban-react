const TaskBox = ({ events, setEvents, currentEvent }) => {
  const handleRemove = () => {
    if (confirm('You really whant to remove it?'))
      setEvents((prev) =>
        prev.filter((item) => item.title != currentEvent.title)
      );
  };

  return (
    <div className='task-box'>
      <header className='task-box-header'>
        <h1 className='task-box-title'>All Tasks</h1>
        <button className='remove-button' onClick={handleRemove}>
          Remove this Evnet
        </button>
      </header>
    </div>
  );
};

export default TaskBox;
