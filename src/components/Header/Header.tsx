import { useActions } from '../../hooks/useActions';

import './Header.scss';

const Header = () => {
  const { setSort } = useActions();

  return (
    <div className="header">
      <div className="buttons-list">
        <button className="button" onClick={() => setSort('all')}>
          Все
        </button>
        <button className="button" onClick={() => setSort('active')}>
          Активные
        </button>
        <button className="button" onClick={() => setSort('completed')}>
          Выполненые
        </button>
      </div>
    </div>
  );
};

export default Header;
