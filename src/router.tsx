/* eslint-disable import/prefer-default-export */
// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';
import Root from './router/Root/Root';
import Error from './components/Error';
import Favorites from './components/Favorites/Favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/recipe/:slug',
        element: <Recipe />,
        errorElement: <Error />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);
