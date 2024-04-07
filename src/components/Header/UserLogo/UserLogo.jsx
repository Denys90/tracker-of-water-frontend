import { useState, useEffect, useRef } from 'react';
import {
  UserLogoWrap,
  UserIcon,
  UserArrow,
  UserNameBtn,
  AuthPopover,
  PopoverBtn,
} from './UserLogo.styled';
import svg from 'assets/images/icons.svg';
import { useUsers } from 'hooks/useUsers';
import Modal from 'components/Modal/Modal';
import { SettingUser } from '../SettingUser/SettingUser';

export const UserLogo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { signOut } = useUsers();

  const popoverRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Додає клік по кнопці
    document.addEventListener('click', handleClickOutside);
    // прибирає клік
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // перевіряє чи клікнули мимо поовера
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false); // Закриваємо поповер
    }
  };

  const togglePopover = (event) => {
    event.stopPropagation(); // Останавливаем всплытие события, чтобы NavLink не перенаправил пользователя
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <>
      <UserLogoWrap type="button" onClick={togglePopover}>
        <UserNameBtn>David</UserNameBtn>
        {/* ==================================== */}
        {/* передати іконку */}
        <UserIcon></UserIcon>
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
          <SettingUser />
        </Modal>
      )}
    </>
  );
};
