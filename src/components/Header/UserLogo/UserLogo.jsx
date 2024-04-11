import { useState, useEffect, useRef } from 'react';
import {
  UserLogoWrap,
  UserArrow,
  AuthPopover,
  PopoverBtn,
  Avatar,
  UserName,
} from './UserLogo.styled';
import svg from 'assets/images/icons.svg';
import { useUsers } from 'hooks/useUsers';
import Modal from 'components/Modal/Modal';
import { SettingUser } from '../SettingUser/SettingUser';

export const UserLogo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { signOut, user } = useUsers();

  const popoverRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  const togglePopover = (event) => {
    event.stopPropagation();
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <>
      <UserLogoWrap type="button" onClick={togglePopover}>
        <UserName>{user.name || user.email}</UserName>

        <Avatar src={user.avatarURL} alt="avatar" />

        <UserArrow>
          <use href={`${svg}#icon-down`} />
        </UserArrow>
      </UserLogoWrap>

      {isPopoverOpen && (
        <AuthPopover ref={popoverRef}>
          <PopoverBtn type="button" onClick={toggleModal}>
            <svg>
              <use href={`${svg}#icon-fix`} />
            </svg>
            Setting
          </PopoverBtn>
          <PopoverBtn type="button" onClick={() => signOut()}>
            <svg>
              <use href={`${svg}#icon-exit`} />
            </svg>
            Log out
          </PopoverBtn>
        </AuthPopover>
      )}
      {isOpen && (
        <Modal onClose={toggleModal}>
          <SettingUser toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
