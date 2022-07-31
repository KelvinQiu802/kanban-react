import AddTaskButton from './AddTaskButton';

const Column = ({ tag }) => {
  return (
    <div className='column'>
      {tag}
      <AddTaskButton />
    </div>
  );
};

export default Column;
