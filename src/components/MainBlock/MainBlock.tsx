import Header from '../Header/Header';
import TaskInput from '../TaskInput/TaskInput';
import TasksList from '../TasksList/TasksList';

import './MainBlock.scss';

const MainBlock = () => {
  return (
    <div className="mainBlock">
      <div className="wrapper">
        <Header />
        <TaskInput />
        <TasksList />
      </div>
    </div>
  );
};

export default MainBlock;
