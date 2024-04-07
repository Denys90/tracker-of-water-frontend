import { NavLink } from 'react-router-dom';
import logo from 'assets/images/Logo.png';
import { LogoImg } from './Logo.styled';
import { useUsers } from 'hooks/useUsers';

export const Logo = () => {
  const { isAuthenticated } = useUsers();

  return (
    <div>
      {isAuthenticated ? (
        <NavLink to="/home">
          <LogoImg src={logo} alt="logo" />
        </NavLink>
      ) : (
        <NavLink to="/">
          <LogoImg src={logo} alt="logo" />
        </NavLink>
      )}
    </div>
  );
};
