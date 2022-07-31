import AddTaskButton from './AddTaskButton';
import Task from './Task';

const Column = ({ tag, currentEvent, events, setEvents }) => {
  const handleAdd = () => {
    const name = prompt('Enter task name:');
    const details = prompt('Enter details:');
    if (!(name && details)) return;
    setEvents((prev) => {
      const arrCopy = [...prev];
      const index = prev.findIndex(
        (event) => event.title === currentEvent.title
      );
      const eventCopy = arrCopy[index];
      arrCopy.splice(index, 1, {
        title: currentEvent.title,
        tasks: [
          ...eventCopy.tasks,
          { name: name, details: details, state: tag },
        ],
      });
      return arrCopy;
    });
  };

  console.log();

  return (
    <div className='column'>
      {tag}
      <AddTaskButton handleClick={handleAdd} />
      <div className='task-container'>
        {events
          .find((event) => event.title === currentEvent.title)
          ?.tasks.map((item) => {
            if (item.state === tag) {
              return (
                <Task key={item.name} name={item.name} details={item.details} />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Column;
