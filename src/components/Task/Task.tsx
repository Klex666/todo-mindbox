import { useActions } from '../../hooks/useActions';
import { ITask } from '../../redux/slices/tasksSlice';

import './Task.scss';

const Task: React.FC<ITask> = ({ id, value, completed }) => {
  const { setCompleted, removeTask } = useActions();

  return (
    <>
      <div className="task">
        {completed ? (
          <div className="circle" onClick={() => setCompleted(id)}>
            <img
              src="./task/approved.png"
              alt="Check-mark"
              className="check-mark"
              width={20}
              height={20}
            />
          </div>
        ) : (
          <div className="circle" onClick={() => setCompleted(id)}></div>
        )}
        <div className={completed ? 'task-text completed' : 'task-text'}>{value}</div>

        <button className="task-remove__button" onClick={() => removeTask(id)}>
          Удалить
        </button>
      </div>
    </>
  );
};

export default Task;
