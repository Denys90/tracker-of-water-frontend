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

export const UserLogo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const popoverRef = useRef(null);

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

  // ====================================
  const userinfo = () => {
    // логіка по кліку на сеттінгс
  };
  // ====================================
  const logout = () => {
    // логіка по  кліку на вихід
  };

  return (
    <>
      <UserLogoWrap type="button" onClick={togglePopover}>
        {/* ==================================== */}
        {/* передати імя */}
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
          <PopoverBtn type="button" onClick={userinfo}>
            <svg>
              <use href={`${svg}#icon-fix`} />
            </svg>
            Setting
          </PopoverBtn>
          <PopoverBtn type="button" onClick={logout}>
            <svg>
              <use href={`${svg}#icon-exit`} />
            </svg>
            Log out
          </PopoverBtn>
        </AuthPopover>
      )}
    </>
  );
};
