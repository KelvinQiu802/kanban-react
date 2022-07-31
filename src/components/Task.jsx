const Task = ({ name, details }) => {
  return <div className='task'>{name + details}</div>;
};

export default Task;
