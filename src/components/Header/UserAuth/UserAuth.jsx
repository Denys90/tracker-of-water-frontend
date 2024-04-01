import sprite from '../../../assets/images/icons.svg';
import { NavLink } from 'react-router-dom';
import { SignInIcon, UserAuthBtn } from './UserAuth.styled';

export const UserAuth = () => {
  return (
    <div>
      <NavLink to="/">
        <UserAuthBtn type="button">
          Sign in
          <SignInIcon>
            <use href={`${sprite}#icon-user`}></use>
          </SignInIcon>
        </UserAuthBtn>
      </NavLink>
    </div>
  );
};
