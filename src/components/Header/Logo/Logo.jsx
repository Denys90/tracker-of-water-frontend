import { NavLink } from 'react-router-dom';
import logo from 'assets/images/Logo.png';
import { LogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <LogoImg src={logo} alt="logo" />
      </NavLink>
    </div>
  );
};
