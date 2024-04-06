import { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
import {
  UserLogo,
  UserIcon,
  UserArrow,
  UserNameBtn,
  AuthPopover,
  PopoverBtn,
} from './UserAuth.styled';
import svg from 'assets/images/icons.svg';

function UserAuth() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const popoverRef = useRef(null);

  useEffect(() => {
    // Добавляем обработчик клика к корневому элементу приложения
    document.addEventListener('click', handleClickOutside);
    // Убираем обработчик клика при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // Проверяем, был ли клик сделан вне поповера
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false); // Закрываем поповер
    }
  };

  const togglePopover = (event) => {
    event.stopPropagation(); // Останавливаем всплытие события, чтобы NavLink не перенаправил пользователя
    setIsPopoverOpen(!isPopoverOpen);
  };

  const userinfo = () => {
    // Реализуйте логику для настроек пользователя
  };

  const logout = () => {
    // Реализуйте логику для выхода пользователя
  };

  return (
    <>
      <UserLogo type="button" onClick={togglePopover}>
        {/* передати імя */}
        <UserNameBtn>David</UserNameBtn>
        {/* передати іконку */}
        <UserIcon></UserIcon>
        <UserArrow>
          <use href={`${svg}#icon-down`} />
        </UserArrow>
      </UserLogo>

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
}

export default UserAuth;
