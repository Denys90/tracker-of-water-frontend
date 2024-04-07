import { NavLink } from 'react-router-dom';
import { SignInIcon, UserAuthBtn } from './UserAuth.styled';
import svg from 'assets/images/icons.svg';

function UserAuth() {
  return (
    <NavLink to="/login">
      <UserAuthBtn type="button">
        Sign in
        <SignInIcon>
          <use href={`${svg}#icon-user`} />
        </SignInIcon>
      </UserAuthBtn>
    </NavLink>
  );
}

export default UserAuth;
