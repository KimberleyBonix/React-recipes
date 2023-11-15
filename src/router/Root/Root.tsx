import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Menu from '../../components/Menu/Menu';

import './Root.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getRecipes } from '../../store/reducers/recipes';
import Loading from '../../components/App/Loading';

function Root() {
  const loading = useAppSelector((state) => state.recipes.loading);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
}

export default Root;
