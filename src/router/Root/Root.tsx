import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Menu from '../../components/Menu/Menu';

import './Root.scss';

function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
}

export default Root;
