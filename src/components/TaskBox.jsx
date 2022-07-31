import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const TaskBox = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleRemove = () => {
    if (confirm('You really whant to remove it?')) {
      setEvents((prev) => {
        const result = prev.filter((item) => item.title != currentEvent.title);
        if (!result.length) {
          setEvents([{ title: 'Add a New Event', tasks: [] }]);
          setCurrentEvent({ title: 'Add a New Event', tasks: [] });
        } else {
          setCurrentEvent(result[0]);
        }
        return result;
      });
    }
  };

  const handleDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    // const { source, destination } = result;
    // // Remove from source
    // const taskCopy = currentEvent[source.droppableId][source.index];
    // console.log(taskCopy);
  };

  return (
    <div className='task-box'>
      <header className='task-box-header'>
        <h1 className='task-box-title'>All Tasks</h1>
        <button className='remove-button' onClick={handleRemove}>
          Remove this Event
        </button>
      </header>
      <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
        <div className='task-box-body'>
          <Column
            tag='To do'
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
          <Column
            tag='In progress'
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
          <Column
            tag='Completed'
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBox;
