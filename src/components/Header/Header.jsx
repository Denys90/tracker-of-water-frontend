import { Logo } from './Logo/Logo';
import { UserLogo } from './UserLogo/UserLogo';
import { Containers, ContainerHeader, WrapHeader } from './Header.styled';

import UserAuth from './UserAuth/UserAuth';
import { useUsers } from 'hooks/useUsers';
import DarkMode from '../../Theme/DarkMode';

const Header = () => {
  const { isAuthenticated } = useUsers();

  return (
    <header>
      <Containers>
        <ContainerHeader>
          <Logo />
          <DarkMode />
          <WrapHeader>
            {!isAuthenticated ? <UserAuth /> : <UserLogo />}
          </WrapHeader>
        </ContainerHeader>
      </Containers>
    </header>
  );
};

export default Header;
