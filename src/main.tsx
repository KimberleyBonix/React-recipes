import { RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';
import { router } from './router';

// On importe notre fichier de style global
import './styles/index.scss';

import store from './store';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
