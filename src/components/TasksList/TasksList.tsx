import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import Task from '../Task/Task';

import './TasksList.scss';

const TasksList: React.FC = () => {
  const { sort } = useTypedSelector((state) => state.headerReducer);
  const { list } = useTypedSelector((state) => state.tasksReducer);

  return (
    <div className="task-list">
      {sort === 'all'
        ? list.map((item) => {
            return <Task key={item.id} {...item} />;
          })
        : null}
      {sort === 'active'
        ? list.map((item) => {
            return item.completed === false && <Task key={item.id} {...item} />;
          })
        : null}
      {sort === 'completed'
        ? list.map((item) => {
            return item.completed === true && <Task key={item.id} {...item} />;
          })
        : null}
    </div>
  );
};

export default TasksList;
