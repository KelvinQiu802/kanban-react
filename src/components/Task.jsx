const Task = ({ name, details }) => {
  return (
    <div className='task'>
      <h2 className='task-name over-hide'>{name}</h2>
      <p className='task-details'>{details}</p>
    </div>
  );
};

export default Task;
