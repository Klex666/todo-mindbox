import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Header.scss';

const Header = () => {
  const { sort } = useTypedSelector((state) => state.headerReducer);
  const { setSort } = useActions();

  return (
    <div className="header">
      <div className="buttons-list">
        <button
          className={sort === 'all' ? 'button active' : 'button'}
          onClick={() => setSort('all')}>
          Все
        </button>
        <button
          className={sort === 'active' ? 'button active' : 'button'}
          onClick={() => setSort('active')}>
          Активные
        </button>
        <button
          className={sort === 'completed' ? 'button active' : 'button'}
          onClick={() => setSort('completed')}>
          Выполненые
        </button>
      </div>
    </div>
  );
};

export default Header;
