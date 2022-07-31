const Task = ({ name, details, provided, snapshot }) => {
  return (
    <div
      className='task'
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h2 className='task-name over-hide'>{name}</h2>
      <p className='task-details'>{details}</p>
      <div className='remove-bar'>-</div>
    </div>
  );
};

export default Task;
