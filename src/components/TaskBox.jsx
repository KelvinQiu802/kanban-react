import React, { useCallback } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const TaskBox = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleRemove = useCallback(() => {
    if (confirm('You really want to remove it?')) {
      // update events
      setEvents((prev) => {
        const result = prev.filter((item) => item.title != currentEvent.title);
        // if event is empty
        if (!result.length) {
          // init the event
          const initEvent = [
            {
              title: 'Add a new Event',
              ['To do']: [],
              ['In progress']: [],
              ['Completed']: [],
            },
          ];
          setEvents(initEvent);
        } else {
          // set the first event as current
          setCurrentEvent(result[0]);
        }
        return result;
      });
    }
  }, [events, setEvents, currentEvent, setCurrentEvent]);

  const handleDragEnd = useCallback((result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const curEvent = events.find((item) => item.title === currentEvent.title);
    const taskCopy = curEvent[source.droppableId][source.index];
    setEvents((prev) =>
      prev.map((event) => {
        if (event.title === currentEvent.title) {
          let eventCopy = { ...event };
          // Remove from source
          const taskListSource = event[source.droppableId];
          taskListSource.splice(source.index, 1);
          eventCopy = { ...event, [source.droppableId]: taskListSource };
          // Add to destination
          const taskListDes = event[destination.droppableId];
          taskListDes.splice(destination.index, 0, taskCopy);
          eventCopy = { ...event, [destination.droppableId]: taskListDes };
          return eventCopy;
        } else {
          return event;
        }
      })
    );
  }, [events, setEvents, currentEvent]);

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
          {
            ['To do', 'In progress', 'Completed'].map(tag => (
              <Column
                tag={tag}
                events={events}
                setEvents={setEvents}
                currentEvent={currentEvent}
              />
            ))
          }
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBox;
