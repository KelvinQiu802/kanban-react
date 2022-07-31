const Task = ({ name, details, id, provided, handleRemove }) => {
  return (
    <div
      className='task'
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h2 className='task-name over-hide'>{name}</h2>
      <p className='task-details'>{details}</p>
      <div className='remove-bar' onClick={() => handleRemove(id)}>
        -
      </div>
    </div>
  );
};

export default Task;
