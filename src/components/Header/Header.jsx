import { Logo } from './Logo/Logo';

import { UserLogo } from './UserLogo/UserLogo';

import { Containers, ContainerHeader, WrapHeader } from './Header.styled';
import useUsers from 'hooks/useUsers';
import UserAuth from './UserAuth/UserAuth';

const Header = () => {
  const { isAuthenticated } = useUsers();

  return (
    <header>
      <Containers>
        <ContainerHeader>
          <Logo />
          <WrapHeader>
            {isAuthenticated ? <UserLogo /> : <UserAuth />}
          </WrapHeader>
        </ContainerHeader>
      </Containers>
    </header>
  );
};

export default Header;
