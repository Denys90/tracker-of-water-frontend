import { NavLink } from 'react-router-dom';
import {
  // ButtonUser,
  SignInIcon,
  UserAuthBtn,
  // UserIcon,
} from './UserAuth.styled';
import svg from 'assets/images/icons.svg';
import { SettingUser } from '../SettingUser/SettingUser';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import useUsers from 'hooks/useUsers';

function UserAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useUsers();
  // console.log('Token', isAuth);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavLink to="/login">
        <UserAuthBtn type="button">
          Sign in
          <SignInIcon>
            <svg>
              <use href={`${svg}#icon-user`} />
            </svg>
          </SignInIcon>
        </UserAuthBtn>
      </NavLink>
      {/* <Кнопки які мають бути в popOver> */}
      <div>
        <button type="button" onClick={toggleModal}>
          Setting
        </button>
        <button type="button" onClick={() => signOut()}>
          Log out
        </button>
      </div>
      {/* ======================================== */}

      {isOpen && (
        <Modal onClose={toggleModal}>
          <SettingUser />
        </Modal>
      )}
    </>
  );
}

export default UserAuth;
