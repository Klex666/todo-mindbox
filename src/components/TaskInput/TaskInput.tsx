import './TaskInput.scss';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TaskInput = () => {
  const { addTask, setValueInput } = useActions();

  const { valueInput } = useTypedSelector((state) => state.inputReducer);

  const handleAdd = (e: { key: string }) => {
    if (e.key === 'Enter') {
      addTask(valueInput);
      setValueInput('');
    }
  };

  return (
    <>
      <input
        type="text"
        value={valueInput}
        className="task-input"
        placeholder="Введи задачу"
        onChange={(e) => setValueInput(e.target.value)}
        onKeyPress={(e) => handleAdd(e)}
      />
    </>
  );
};

export default TaskInput;
