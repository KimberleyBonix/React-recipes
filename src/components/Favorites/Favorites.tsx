import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './styles.scss';
import Page from '../Page/Page';
import Content from '../Content/Content';
import { getFavoritesRecipes } from '../../store/reducers/recipes';

function Favorites() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.logged);

  const favoritesRecipes = useAppSelector((state) => state.recipes.favorites);

  useEffect(() => {
    dispatch(getFavoritesRecipes());
  }, [dispatch]);

  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return (
    <Page>
      <Content
        title="Votre recette favorites"
        text="On les a gardé au chaud !"
        recipes={favoritesRecipes}
      />
    </Page>
  );
}

export default Favorites;
