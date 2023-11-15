import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Menu from '../../components/Menu/Menu';

import './Root.scss';
import { useAppDispatch } from '../../hooks/redux';
import { getRecipes } from '../../store/reducers/recipes';

function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
}

export default Root;
