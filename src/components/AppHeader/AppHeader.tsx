import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login, logout } from '../../store/reducers/user';
import LoginForm from '../LoginForm/LoginForm';
import './styles.scss';

function AppHeader() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const changeField = (value, name) => {};

  const handleLogin = () => {
    dispatch(
      login({
        email: user.credentials.email,
        password: user.credentials.password,
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <img
        src="/src/assets/logo.svg"
        className="header-logo"
        alt="Logo oRecipes"
      />

      <LoginForm
        email={user.credentials.email}
        password={user.credentials.password}
        isLogged={user.logged}
        loggedMessage={user.loggedMessage}
        changeField={changeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </header>
  );
}

export default AppHeader;
