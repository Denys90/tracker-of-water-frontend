import { NavLink } from 'react-router-dom';
import { SignInIcon, UserAuthBtn } from './UserAuth.styled';
import svg from 'assets/images/icons.svg';
import { SettingUser } from '../SettingUser/SettingUser';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
// import useUsers from 'hooks/useUsers';

function UserAuth() {
  const [isOpen, setIsOpen] = useState(false);
  // const { signOut } = useUsers();
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
            <use href={`${svg}#icon-user`} />
          </SignInIcon>
        </UserAuthBtn>
      </NavLink>
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
