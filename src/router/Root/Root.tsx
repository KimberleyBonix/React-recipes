import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

import './Root.scss';

function Root() {
  return (
    <div className="app">
      <Menu />

      <Outlet />
    </div>
  );
}

export default Root;
